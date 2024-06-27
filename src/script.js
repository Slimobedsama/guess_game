//QUERIES THE DOM 
var content = document.querySelector('div.content');
var subContent4 = document.querySelector('div.sub-content-4');
var msg = document.querySelector('p.msg');
var dataInput = document.querySelector('#figure');
var currentRandom = document.querySelector('.current-dis-1');
var currentGuess = document.querySelector('.current-dis-2');
var previousRandomNum = document.querySelector('.previous-dis-1');
var previousGuess = document.querySelector('.previous-dis-2');
var enterButton = document.querySelector('div input[value="Enter"]');
var clearButton = document.querySelector('div input[value="Clear"]');
var paras = document.querySelectorAll('div p');
var replayBtn = document.createElement('input');
// SETS THE GAME PLAY ROUNDS COUNT
var gameRound = 1;
// CREATES THE GAME PLAY FUNCTION
function playGame() {
    // THIS DEFINES THE RANDOM NUMBER
    var randomNum = Math.floor(Math.random() * 100) + 1;
    currentRandom.textContent = "Current Random Number: ".concat(randomNum);
    currentGuess.textContent = "Current Guess: ".concat(dataInput.value);
    // CHECKS THE GAME PLAY ROUND IF IT IS THE FIRST ROUND
    if (gameRound === 1) {
        previousRandomNum.textContent = 'Previous Random Numbers: ';
        previousGuess.textContent = 'Previous Guesses: ';
    }
    // APPENDS THE CURRENT ROUND TO THE PREVIOUS ROUND
    previousRandomNum.textContent += "".concat(randomNum, " ");
    previousGuess.textContent += "".concat(dataInput.value, " ");
    if (dataInput.value == randomNum) {
        msg.innerHTML = 'HURRAY! YOUR GUESS IS CORRECT';
        content.style.backgroundColor = '#00ff00';
        gameOver();
    }
    else if (dataInput.value > randomNum) {
        msg.innerHTML = 'YOUR GUESS IS ABOVE THE RANDOM NUMBER';
        content.style.backgroundColor = '#ff0000';
        content.style.color = '#ece4e4';
        checkInput();
    }
    else if (dataInput.value < randomNum) {
        msg.innerHTML = 'YOUR GUESS IS BELOW THE RANDOM NUMBER';
        content.style.backgroundColor = '#ffd700';
        content.style.color = '#000';
        checkInput();
    }
    if (gameRound === 10) {
        msg.textContent = 'GAME OVER';
        gameOver();
    }
    dataInput.focus();
    gameRound++;
}
// THIS FUNCTION VALIDATES USER INPUT VALUE
function checkInput() {
    if (dataInput.value == '') {
        msg.textContent = 'Insert A Number';
        content.style.backgroundColor = '#fff';
    }
    else if (dataInput.value > 100) {
        msg.textContent = 'Choose A Number Between 1 & 100';
        content.style.color = '#000';
        content.style.backgroundColor = '#fff';
    }
}
// THIS FUNCTION DISABLES THE PLAY GAME FUNCTION
function gameOver() {
    dataInput.disabled = true;
    enterButton.disabled = true;
    // REMOVES THE CLEAR BUTTON
    clearButton.remove();
    // SETS THE ATTRIBUTES OF THE REPLAY BUTTON AND APPENDS IT
    replayBtn.setAttribute('type', 'button');
    replayBtn.setAttribute('value', 'Replay');
    subContent4.appendChild(replayBtn);
    // REPLAY BUTTON EVENT LISTENER
    replayBtn.addEventListener('click', replayGame);
}
// THIS FUNCTION CREATES THE REPLAY GAME MODE
function replayGame() {
    // RESETS THE GAME PLAY ROUND TO 1
    gameRound = 1;
    // ENABLES THE INPUT BOX AND ENTER BUTTON
    dataInput.disabled = false;
    enterButton.disabled = false;
    // SETS THE INPUT TO BE EMPTY
    dataInput.value = '';
    // SETS ALL DISPLAY PARAMETERS TO EMPTY
    paras.forEach(function (para) { return para.textContent = ''; });
    // REMOVES THE REPLAY BUTTON
    replayBtn.remove();
    content.style.backgroundColor = 'white';
    randomNum = Math.floor(Math.random() * 100) + 1;
    // APPENDS THE CLEAR BUTTON
    subContent4.appendChild(clearButton);
    dataInput.focus();
}
// THIS FUNCTION CLEAR THE INPUT
function clearInput() {
    if (dataInput.value !== '') {
        dataInput.value = '';
    }
}
// ENTER BUTTON EVENT LISTENER
enterButton.addEventListener('click', playGame);
// CLEAR BUTTON EVENT LISTENER
clearButton.addEventListener('click', clearInput);
