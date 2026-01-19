// 'function' keyword followed by the custom function name, then ()
function helloWorld() {
  // we can include parameters inside the () as function variables
  // function body is enclosed with curly brackets (braces)
  console.log("hello world"); // can be one or multiple statements inside the function
}
helloWorld(); // once the function is defined, we need to call it to make it run/execute

/* The above function is declared/called ‘helloWorld’ and just prints a simple message. It won’t run until we call it, which we
can do as many times as needed.
This function will print ‘hello world’ to the console and then end, without ‘returning’ any value or result. */

// --------------------------------------------------------------------------------------------------------------------------------- //

/* Functions can also ‘return’ a result when called. The return keyword is the last thing
that happens in a function and will send a value back to where it was called. We can
then log this value (as below) or store it in a variable. */

// function checkAge returns a value when called
function checkAge(age) {
  if (age >= 18) {
    return "adult"; // if the condition is true, return this string and exit
  }
  return "non-adult"; // if the condition was false, return this string and exit
}
console.log(checkAge(21)); // adult
console.log(checkAge(13)); // non-adult

// --------------------------------------------------------------------------------------------------------------------------------- //

/* Functions can also be created as a variable expression using the syntax below. In this case, the function is assigned to
the variable explicitly, like any other value. */

const sayHi = function () {
  // function expression syntax for creating a function
  console.log("Hi");
};

/* No matter how the function is defined, it’s still a value stored in a named variable. Return statements work the same
for both function declarations and function expressions. */

// --------------------------------------------------------------------------------------------------------------------------------- //

/* Function expression vs Function declaration
Function declaration can be hoisted (called earlier than it is defined), whereas
function expression can only be accessed after definition */

sayHiExpression(); // error - cannot access before initialization
sayHiDeclaration(); // works - can be hoisted
const sayHiExpression = function () {
  console.log("Hi");
};
function sayHiDeclaration() {
  console.log("Hi");
}

// --------------------------------------------------------------------------------------------------------------------------------- //

/* Arrow functions are a more concise, shorter version of function expression. We still use the variable expression syntax, but
can omit the function keyword. If the function contains only a single statement in the body, we can also omit the braces.

We do use an arrow => prior to the body of the function. */

const sayHiArrow = () => console.log("Hi"); // arrow function syntax, more concise

/* The below arrow functions are equivalent. Both accept two parameters and return the difference. We can omit the
braces and return keyword. */

const subtract1 = (a, b) => a - b; // most concise version of the below
const subtract2 = (a, b) => {
  return a - b;
}; // does the same thing as above

// --------------------------------------------------------------------------------------------------------------------------------- //

/* Functions - Arrow
Function expressions and declarations can access
an arguments variable within the body, but arrow
functions cannot:
There are other more technical differences as well.
Arrow functions are most useful when passed as
parameters to other functions. We will cover more
examples in later material. */

const sayHiExpression = function () {
  console.log("Hi");
  console.log(arguments);
};
function sayHiDeclaration() {
  console.log("Hi");
  console.log(arguments);
}
const sayHiArrow = () => {
  console.log("Hi");
  console.log(arguments);
};
sayHiDeclaration(); // [Arguments] {}
sayHiExpression(); // [Arguments] {}
sayHiArrow(); // ReferenceError: arguments is not defined
