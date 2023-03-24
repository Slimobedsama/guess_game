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
}

// ENTER BUTTON EVENT LISTENER
enterButton.addEventListener('click', playGame);