const readline = require("readline-sync");

// Helper functions

// Mortgage monthtly payment algorithm
function calculateMonthlyPayment(loanAmount, apr, loanDurationYears) {
  const monthlyInterest = apr / 100 / 12;
  const loanDurationMonths = loanDurationYears * 12;

  const monthlyPayment =
    loanAmount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -loanDurationMonths)));

  return monthlyPayment;
}

// prompt function
function prompt(message) {
  console.log(`=> ${message}`);
}

// validate number
function invalidNumber(number) {
  return number < 0 || number.trim() === "" || Number.isNaN(Number(number));
}

// Start of program
prompt("Calculate your mortgage with this calculator");
// Create a loop so user can make multiple calculations

while (true) {
  prompt("Please input your loan amount: ");
  let loanAmount = readline.question();

  // validate input
  while (invalidNumber(loanAmount)) {
    prompt("Invalid input, try again ...");
    loanAmount = readline.question();
  }

  prompt("Please input the Annual Percentage Rate (APR), eg. 2.75% => 2.75:");
  let apr = readline.question();

  // validate input
  while (invalidNumber(apr)) {
    prompt("Invalid input, try again ...");
    apr = readline.question();
  }

  prompt("Please input the mortgage duration in years:");
  let loanDurationYears = readline.question();

  // validate input
  while (
    invalidNumber(loanDurationYears) ||
    !Number.isInteger(Number(loanDurationYears))
  ) {
    prompt(
      "Invalid input, try again \n (Example: 2.5 is invalid. Round to the nearest whole number)..."
    );
    loanDurationYears = readline.question();
  }

  // After validating input calculate result
  const result = calculateMonthlyPayment(
    Number(loanAmount),
    Number(apr),
    Number(loanDurationYears)
  );
  prompt(
    `Your monthly mortgage payment is $${result.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  );

  prompt(
    "Would you like to make another calculation? Input '1' for YES and '2' for NO:"
  );
  let again = readline.question();

  // validate input
  while (!["1", "2"].includes(again)) {
    prompt("Invalid input, try again  (1 or 2):");
    again = readline.question();
  }

  if (again === "2") break;
}
