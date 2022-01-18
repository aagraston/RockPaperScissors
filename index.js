
//function for returning a string for what the computer chooses
let numRounds = 5;

let playerInput = "";

//variables that are updated and displayed from the top down

let roundCount = "Round";
let roundText = "Waiting for input"

let pWinCount = 0;
let cWinCount = 0;

let conditionText = "";

//gather the elements needed for updates

const selectButtons = document.querySelectorAll('button');

const headerBar = document.querySelector('.rounds-container');

const headerTitle = document.querySelector('.header-title p');
const headerDescription = document.querySelector('.header-description p');

const roundNumber = document.querySelector('.round-number');
const roundDisplay = document.querySelector('.round-display');

const pScore = document.querySelector('.player-score p');
const cScore = document.querySelector('.com-score p');

const roundExplain = document.querySelector('.round-explanation p');

console.log(roundExplain);

//assign event listeners

selectButtons.forEach(element => {
  element.addEventListener('click', (e) => {
    switch (element.getAttribute('data-type')) {

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
  });
});

//

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
    
      conditionText = ("You win this round! " + pChoiceFormatted + " beats out " + computerChoice);
      changeBarColor("win");
    pWinCount++;
  }
  else if (pChoiceUpperCase === cChoiceUpperCase) {
    conditionText = ("It's a tie this round! Player and computer chose: " + pChoiceFormatted);
    changeBarColor("tie");
  }
  else {
    conditionText = ("You Lose this round! " + computerChoice + " beats out " + pChoiceFormatted);
    changeBarColor("lose");
    cWinCount++;
  }
  roundExplain.innerText = conditionText;

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