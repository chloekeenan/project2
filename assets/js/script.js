const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

//Designing button interactions with user choice!
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

// Generating computer-generated random selections
function generateComputerChoice() {
const randomNumber = Math.floor(Math.random() * 3) + 1; 

if (randomNumber === 1) {
computerChoice = 'Rock';
}
if (randomNumber === 2) {
    computerChoice = 'Scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper';
        }
computerChoiceDisplay.innerHTML = computerChoice;
}

//Conditions for the game: win, lose
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its A Draw!';
}
if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'Well Done! You Win!';
}
if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'Hard Luck! You Lose!';
}
if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'Well Done! You Win!';
}
if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'Unlucky! You Lose!';
}
if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'Well Done! You Win!';
}
if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'Unlucky! You Lose!';
}
resultDisplay.innerHTML = result;
}

// Count the wins and losses for both the user and the computer.
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore; 
}