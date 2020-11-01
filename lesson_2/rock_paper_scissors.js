const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

// Helper functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateWinner(computerChoice, userChoice) {
  if (
    (computerChoice === VALID_CHOICES[0] && userChoice === VALID_CHOICES[2]) ||
    (computerChoice === VALID_CHOICES[1] && userChoice === VALID_CHOICES[0]) ||
    (computerChoice === VALID_CHOICES[2] && userChoice === VALID_CHOICES[1])
  ) {
    return `${computerChoice} beats ${userChoice}, the computer wins`;
  } else if (
    (userChoice === VALID_CHOICES[0] && computerChoice === VALID_CHOICES[2]) ||
    (userChoice === VALID_CHOICES[1] && computerChoice === VALID_CHOICES[0]) ||
    (userChoice === VALID_CHOICES[2] && computerChoice === VALID_CHOICES[1])
  ) {
    return `${userChoice} beats ${computerChoice}, you win!`;
  } else {
    return `It's a tie`;
  }
}

let anotherGame = true;
while (anotherGame) {
  // Get User's input
  prompt("Choose one: rock, paper, scissors");
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("Incorrect choice, please try again...");
    userChoice = readline.question();
  }

  // Get Computer input
  let computerChoice = VALID_CHOICES[Math.ceil(Math.random() * 2)];

  // Get result
  let winner = calculateWinner(computerChoice, userChoice);

  // Display result
  prompt(winner);

  // Would the user like to play again
  prompt("Would you like to play again? (y/n)");
  let playAgain = readline.question();

  while (!["y", "n"].includes(playAgain.toLowerCase())) {
    prompt("Incorrect choice, please select again (y/n)...");
    playAgain = readline.question();
  }

  anotherGame = playAgain === "y";
}
