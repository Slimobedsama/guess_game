//QUERIES THE DOM 
const content = document.querySelector('div .content');
const msg = document.querySelector('p .msg');
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
    gameRound++;
}
// THIS FUNCTION CHECKS USER INPUT VALUE
function checkInput() {
    if(dataInput.value === '') {
        msg.textContent = 'Insert A Number';
    } else if(dataInput.value > 100) {
        msg.textContent = 'Choose A Number Between 1 & 100';
    }
}

function clearInput() {
    if(dataInput.value !== '') {
        dataInput.value = '';
    }
}
// ENTER BUTTON EVENT LISTENER
enterButton.addEventListener('click', playGame);
// CLEAR BUTTON EVENT LISTENER
clearButton.addEventListener('click', clearInput);