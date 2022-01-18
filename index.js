
//function for returning a string for what the computer chooses
let roundNum = 1;
let numRounds = 5;

let playerInput = "";

//variables that are updated and displayed from the top down
let roundText = "Waiting for input"

let pWinCount = 0;
let cWinCount = 0;

let conditionText = "";

//gather the elements needed for updates

const selectButtons = document.querySelectorAll('button');

const headerBar = document.querySelector('.rounds-container');

const roundNumber = document.querySelector('.round-number');
const roundDisplay = document.querySelector('.round-display');

const pScore = document.querySelector('.player-score p');
const cScore = document.querySelector('.com-score p');

const roundExplain = document.querySelector('.round-explanation p');

console.log(roundExplain);

//assign event listeners

selectButtons.forEach(element => {
  element.addEventListener('click', buttonClick);
});

//to de-anonamyze the event listener for buttons
function buttonClick() {
  switch (this.getAttribute('data-type')) {

    case 'rock':
      computeRound('rock', computerPlay());
      break;

    case 'paper':
      computeRound('paper', computerPlay());
      break;

    case 'scissors':
      computeRound('scissors', computerPlay());
      break;
  }
}

//computer selection
function computerPlay() {
  let selection = computeRandomNum(3);
  let selectionString = "";

  if (selection === 1) {
    selectionString = "Rock";
  }

  else if (selection === 2) {
    selectionString = "Paper";
  }

  else if (selection === 3) {
    selectionString = "Scissors";
  }

  return selectionString;

}


function computeRound(playerChoice, computerChoice) {

  pChoiceUpperCase = playerChoice.toUpperCase();
  cChoiceUpperCase = computerChoice.toUpperCase();

  pChoiceFormatted = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  cChoiceFormatted = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase();

  if ((pChoiceUpperCase === "SCISSORS" && cChoiceUpperCase === "PAPER") ||
    (pChoiceUpperCase === "ROCK" && cChoiceUpperCase === "SCISSORS") ||
    (pChoiceUpperCase === "PAPER" && cChoiceUpperCase === "ROCK")) {
    // a win happens here

    conditionText = ("You won the last round! " + pChoiceFormatted + " beats out " + computerChoice);
    roundText = ("You won round " + roundNum);
    changeBarColor("win");
    pWinCount++;
  }
  else if (pChoiceUpperCase === cChoiceUpperCase) {
    conditionText = ("The last round was a tie! Player and computer chose: " + pChoiceFormatted);
    roundText = ("Round " + roundNum + " was a tie");
    changeBarColor("tie");
  }
  else {
    conditionText = ("You Lost the last round! " + computerChoice + " beats out " + pChoiceFormatted);
    roundText = ("You lost round " + roundNum);
    changeBarColor("lose");
    cWinCount++;
  }

  pScore.innerText = "PLAYER: " + pWinCount;
  cScore.innerText = "COMPUTER: " + cWinCount;
  roundExplain.innerText = conditionText;
  roundDisplay.innerText = roundText;
  
  if (roundNum >= numRounds) {
    roundNum++;
    roundNumber.innerText = "Game Over!";
    gameOver();
  }
  else {
    roundNum++;
    roundNumber.innerText = "Round " + roundNum;
  }


}

function changeBarColor(condition) {
  if (condition === "win") {
    headerBar.classList.remove("rounds-yellow");
    headerBar.classList.remove("rounds-red");
    headerBar.classList.add("rounds-green");
  }
  else if (condition === "lose") {
    headerBar.classList.remove("rounds-yellow");
    headerBar.classList.remove("rounds-green");
    headerBar.classList.add("rounds-red");
  }
  else if (condition === "tie") {
    headerBar.classList.remove("rounds-red");
    headerBar.classList.remove("rounds-green");
    headerBar.classList.add("rounds-yellow");
  }
}

//function returns random int from 1 to number passed
function computeRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum) + 1;
}

function gameOver() {
  selectButtons.forEach(element => {
    element.removeEventListener('click', buttonClick);
  })
  if (pWinCount > cWinCount) {
    roundDisplay.innerText = "You Won the game!";
    changeBarColor("win");  
  }
  else if (cWinCount > pWinCount) {
    roundDisplay.innerText = "The Computer Won the game";
    changeBarColor("lose");
  }
  else if (cWinCount === pWinCount) {
    roundDisplay.innerText = "The game was a tie!";
    changeBarColor("tie");
  }
} 