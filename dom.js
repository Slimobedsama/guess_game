//QUERIES THE DOM 
const content = document.querySelector('div.content');
const subContent4 = document.querySelector('div.sub-content-4');
const msg = document.querySelector('p.msg');
const dataInput = document.querySelector('#figure');
const currentRandom = document.querySelector('.current-dis-1');
const currentGuess = document.querySelector('.current-dis-2');
const previousRandomNum = document.querySelector('.previous-dis-1');
const previousGuess = document.querySelector('.previous-dis-2');
const enterButton = document.querySelector('div input[value="Enter"]');
const clearButton = document.querySelector('div input[value="Clear"]');

// SETS THE GAME PLAY ROUNDS COUNT
let gameRound = 1;

// CREATES THE GAME PLAY FUNCTION
function playGame() {
    // THIS DEFINES THE RANDOM NUMBER
    const randomNum = Math.floor(Math.random() * 100) + 1;
    currentRandom.textContent = `Current Random Number: ${randomNum}`;
    currentGuess.textContent = `Current Guess: ${dataInput.value}`;
    // CHECKS THE GAME PLAY ROUND IF IT IS THE FIRST ROUND
    if(gameRound === 1) {
        previousRandomNum.textContent = 'Previous Random Numbers: ';
        previousGuess.textContent = 'Previous Guesses: ';
    }
    // APPENDS THE CURRENT ROUND TO THE PREVIOUS ROUND
    previousRandomNum.textContent += `${randomNum} `;
    previousGuess.textContent += `${dataInput.value} `;

    if(dataInput.value == randomNum) {
        msg.innerHTML = 'HURRAY! YOUR GUESS IS CORRECT';
        content.style.backgroundColor = '#00ff00';
        gameOver();
    } else if(dataInput.value > randomNum) {
        msg.innerHTML = 'YOUR GUESS IS ABOVE THE RANDOM NUMBER';
        content.style.backgroundColor = '#ff0000';
        content.style.color = '#ece4e4';
        checkInput();
        
    } else if(dataInput.value < randomNum) {
        msg.innerHTML = 'YOUR GUESS IS BELOW THE RANDOM NUMBER';
        content.style.backgroundColor = '#ffd700';
        content.style.color = '#130404e8';
        checkInput();
    }
    if(gameRound === 10) {
        msg.textContent = 'GAME OVER';
        gameOver();
    }
    dataInput.focus();
    gameRound++;
}
// THIS FUNCTION VALIDATES USER INPUT VALUE
function checkInput() {
    if(dataInput.value == '') {
        msg.textContent = 'Insert A Number';
        content.style.backgroundColor = '#fff';
    } else if(dataInput.value > 100) {
        msg.textContent = 'Choose A Number Between 1 & 100';
        content.style.backgroundColor = '#fff';
    }
}
// THIS FUNCTION DISABLES THE PLAY GAME FUNCTION
function gameOver() {
    dataInput.disabled = true;
    enterButton.disabled = true;
    // CREATES THE REPLAY BUTTON
    const replayBtn = document.createElement('input');
    replayBtn.setAttribute('type', 'button');
    replayBtn.setAttribute('value', 'Replay');
    subContent4.appendChild(replayBtn);
    // REPLAY BUTTON EVENT LISTENER
    replayBtn.addEventListener('click',replay);
}
// THIS FUNCTION CLEAR THE INPUT
function clearInput() {
    if(dataInput.value !== '') {
        dataInput.value = '';
    }
}
// ENTER BUTTON EVENT LISTENER
enterButton.addEventListener('click', playGame);
// CLEAR BUTTON EVENT LISTENER
clearButton.addEventListener('click', clearInput);