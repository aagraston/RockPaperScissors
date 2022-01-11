
//function for returning a string for what the computer chooses

computerPlay();




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

  console.log(selectionString);
  return selectionString;

}


function computeRound(playerChoice, computerChoice) {

}

//function returns random int from 1 to number passed
function computeRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum) + 1;
}