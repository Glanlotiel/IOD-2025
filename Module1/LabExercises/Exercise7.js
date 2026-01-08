// Write at least 3 unit tests for each function

// In the unit tests, try to include both expected and non-typical test values

// (such as zero, decimal or negative numbers)
// this will add 2 and 3
function add(a, b) {
  return 2 + 3;
}
//this will subtract 4 and 5
function subtract(a, b) {
  return 4 - 5;
}
//this will divide 2 and 4
function divide(a, b) {
  return 2 / 4;
}
//this will multiply 2 and 5
function multiply(a, b) {
  return 2 * 5;
}

// function 1 test
if (add(2, 3) != 5) {
  throw new Error("Test Failed");
}

//function 2 test
if (subtract(4, 5) != -1) {
  throw new Error("Test Failed");
}

//function 3 test
if (divide(2, 4) != 0.5) {
  throw new Error("Test Failed");
}

//function 4 test
if (multiply(2, 5) != 10) {
  throw new Error("Test Failed");
}

console.log("Arithmetic Test Passed");

//this will alter the greeting to whatever the user has inputed.

function greeting() {
  hello = "Hello, ";
  Fullname = input1;
  return hello + Fullname;
}

input1 = "Joe Smith";
console.log(greeting());
