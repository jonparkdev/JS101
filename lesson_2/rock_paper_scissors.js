const readline = require("readline-sync");

// constants
const VALID_CHOICES = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  l: "lizard",
  sp: "spock",
};
const VALID_CHOICES_KEYS = Object.keys(VALID_CHOICES);
const VALID_CHOICES_VALUES = Object.values(VALID_CHOICES);
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

// create scorecard
const scorecard = {
  computer: 0,
  player: 0,
};

// Helper functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function printSelectionOptions() {
  prompt("Type the code in the brackets [] to select your input...");
  VALID_CHOICES_KEYS.forEach((key) => {
    prompt(`[${key}]: ${VALID_CHOICES[key]}`);
  });
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt("You win!\n");
    updateScorecard("player");
  } else if (choice === computerChoice) {
    prompt("It's a tie!\n");
  } else {
    updateScorecard("computer");
    prompt("Computer wins!\n");
  }
}

function updateScorecard(winner) {
  scorecard[winner] += 1;
}

function winner() {
  if (scorecard["computer"] === 5) {
    return "Computer Wins the Match";
  } else if (scorecard["player"] === 5) {
    return "You Win the Match";
  } else {
    return null; // no one has won yet
  }
}

// START OF GAME

prompt(`Welcome to ${VALID_CHOICES_VALUES.join(", ")}.`);
prompt("You will be playing me, THE COMPUTER.");
prompt(`First person (or machine) to 5 games wins!`);

let gameCounter = 1;
while (!winner()) {
  // Display current state of game
  prompt(`----------Game ${gameCounter}--------------`);
  prompt(
    `COMPUTER: ${scorecard["computer"]} | PLAYER: ${scorecard["player"]}\n`
  );
  // Get User's input
  printSelectionOptions();
  let userChoice = readline.question();

  while (!VALID_CHOICES_KEYS.includes(userChoice.toLowerCase())) {
    prompt("Incorrect choice, please try again...");
    userChoice = readline.question();
  }

  // Get Computer input
  let computerChoice = VALID_CHOICES_KEYS[Math.ceil(Math.random() * 4)];

  // Get result
  displayWinner(VALID_CHOICES[userChoice], VALID_CHOICES[computerChoice]);
  gameCounter++;
}

prompt(winner());
