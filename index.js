
//function for returning a string for what the computer chooses
let pWinCount = 0; 
let cWinCount = 0;

let numRounds = 5;

let playerInput = "";


game();


function game() {

    //computeRound(playerInput, computerPlay());

    //window.alert("The score is: Player: " + pWinCount + " Computer: " + cWinCount);
  

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
    window.alert("You win! " + pChoiceFormatted + " beats " + computerChoice);
    pWinCount++;
  }
  else if (pChoiceUpperCase === cChoiceUpperCase) {
    window.alert("It's a tie! Player and computer chose: " + pChoiceFormatted);
  }
  else {
    window.alert("You Lose! " + computerChoice + " beats " + pChoiceFormatted);
    cWinCount++;
  }

}

//function returns random int from 1 to number passed
function computeRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum) + 1;
}