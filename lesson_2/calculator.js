const readline = require("readline-sync");
const CONFIG = require("./calculatorMessageConfig");

// helper functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === "" || Number.isNaN(Number(number));
}

prompt("Language? 1) English 2) French");
const language = readline.question();

let anotherCalculation;
prompt(CONFIG[language].intro);
do {
  // Ask the user for the first number
  prompt(CONFIG[language].firstNum);
  let firstNum = readline.question();

  while (invalidNumber(firstNum)) {
    prompt(CONFIG[language].error);
    firstNum = readline.question();
  }

  // Ask the user for the second number
  prompt(CONFIG[language].secondNum);
  let secondNum = readline.question();

  while (invalidNumber(secondNum)) {
    prompt(CONFIG[language].error);
    secondNum = readline.question();
  }

  // Ask the user for the type of operation
  prompt(CONFIG[language].operation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(CONFIG[language].error);
    operation = readline.question();
  }

  // compute
  let result;
  switch (operation) {
    case "1":
      result = Number(firstNum) + Number(secondNum);
      break;
    case "2":
      result = Number(firstNum) - Number(secondNum);
      break;
    case "3":
      result = Number(firstNum) * Number(secondNum);
      break;
    case "4":
      result = Number(firstNum) / Number(secondNum);
      break;
  }

  // print out result
  console.log(result);

  // Again?
  prompt(CONFIG[language].again);
  anotherCalculation = readline.question();

  while (!["1", "2"].includes(anotherCalculation)) {
    prompt(CONFIG[language].error);
    anotherCalculation = readline.question();
  }
} while (anotherCalculation === "1");
