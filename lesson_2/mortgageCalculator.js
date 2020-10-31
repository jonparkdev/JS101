const readline = require("readline-sync");

// Helper functions

// Mortgage monthtly payment algorithm
function calculateMonthlyPayment(loanAmount, apr, loanDurationYears) {
  const MONTHLY_INTEREST = apr / 100 / 12;
  const LOAN_DURATION_MONTHS = loanDurationYears * 12;

  const monthlyPayment =
    loanAmount *
    (MONTHLY_INTEREST /
      (1 - Math.pow(1 + MONTHLY_INTEREST, -LOAN_DURATION_MONTHS)));

  return monthlyPayment;
}

// prompt function
function prompt(message) {
  console.log(`=> ${message}`);
}

// validate number
function invalidNumber(number) {
  return number.trim() === "" || Number.isNaN(Number(number));
}

// Start of program
prompt("Calculate your mortgage with this calculator");
// Create a loop so user can make multiple calculations

while (true) {
  prompt("Please input your loan amount: ");
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt("Please input a valid amount...");
    loanAmount = readline.question();
  }

  prompt("Please input the Annual Percentage Rate (APR), eg. 2.75% :");
  let apr = readline.question();
  while (invalidNumber(apr)) {
    prompt("Please input a valid amount...");
    apr = readline.question();
  }

  prompt("Please input the mortgage duration in years:");
  let loanDurationYears = readline.question();
  while (invalidNumber(loanDurationYears)) {
    prompt("Please input a valid amount...");
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
  while (!["1", "2"].includes(again)) {
    prompt("Please input a valid selection (1 or 2):");
    again = readline.question();
  }

  if (again === "2") break;
}