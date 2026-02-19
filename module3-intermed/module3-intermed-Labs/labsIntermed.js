/* Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
console.log(ucFirstLetters("new los santos"));
console.log(ucFirstLetters("washington dc"));

// --------------------------------------------------------------------------------------------------------------------- //

/* Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator. */
function truncate(str, max) {
  if (str.length > max);
  return str.slice(0, max) + " ...";
}

function truncateC(str, max) {
  return str.length < max ? console.log(str) : str.slice(0, max) + " ...";
}

console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncateC("This text will be truncated if it is too long", 25));
// This text will be truncat...

// --------------------------------------------------------------------------------------------------------------------- //

/* Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case. */

const animals = ["Tiger", "Giraffe"];
animals.push("Zebra", "Aardvark");
animals.unshift("Bear", "Frog");
animals.sort();

function replaceMiddleAnimal(newValue) {
  let x = animals.length / 2;
  animals.splice(x, 1, newValue);
}

function findMatchingAnimals(beginsWith) {
  return animals.filter((el) =>
    el.toLowerCase().includes(beginsWith.toLowerCase()),
  );
}

replaceMiddleAnimal("Opossum");
console.log(animals);
console.log(findMatchingAnimals("aa"));

// --------------------------------------------------------------------------------------------------------------------- //

/* Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator. */

function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) => {
      if (index === 0) return word;

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// --------------------------------------------------------------------------------------------------------------------- //

/* Decimal number operations in JavaScript can lead to unexpected results, as in the
following: */

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

/* We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful: */

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

/* a) Explain why the above code returns the wrong answer

The code "toFixed" returns values as a string thus concatenating them and giving 0.200.10. 

b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result. */

function currencyAddition(float1, float2) {
  const currency1 = parseFloat(float1);
  const currency2 = parseFloat(float2);
  result = currency1 + currency2;
  return result.toFixed(2);
}
console.log(currencyAddition(0.2, 0.1));

/* c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. */

function currencyOperation(float1, float2, operation, numDecimals = 2) {
  const factor = 10 ** numDecimals;
  const num1 = Math.round(parseFloat(float1) * factor);
  const num2 = Math.round(parseFloat(float2) * factor);

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = (num1 * num2) / factor;
      break;
    case "/":
      result = (num1 / num2) * factor;
      break;
    default:
      return NaN;
  }
  return result / factor;
}

console.log(currencyOperation(0.9, 0.5, "+")); // 1.4
console.log(currencyOperation(0.9, 0.5, "-")); // 0.4
console.log(currencyOperation(0.9, 0.5, "*")); // 0.45
console.log(currencyOperation(0.9, 0.5, "/")); // 1.8
/* d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below: */

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

// --------------------------------------------------------------------------------------------------------------------- //

/* Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own. */

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const cities = [
  "Richmond",
  "York",
  "London",
  "Vienna",
  "Richmond",
  "Berlin",
  "York",
];

function unique(duplicatesArray) {
  let set = new Set(duplicatesArray);
  return set;
}

console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(cities));

// --------------------------------------------------------------------------------------------------------------------- //

/* Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. */

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  let matchingBook = books.find(book => book.id == bookId)
  return matchingBook.title
}


function getOldBooks() {
  return books.filter(book => book.year < 1950)
}



function addGenre() {
  books.map(book => book.genre = 'Classic')
  return books
}

function getTitles(authorInitial) {
  return books
  .filter(book => book.author.toLowerCase().startsWith(authorInitial.toLowerCase()))
  .map(book => book.title);
}

function latestBook() {
  let modernBook = 1900
  books.forEach(book => {
    if (book.year > modernBook) {
      modernBook = book.year
}
})

  return books.find(book => book.year == modernBook)
}

/* 
a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.
b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.
c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.
d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial.
e) (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date. */

// --------------------------------------------------------------------------------------------------------------------- //

/* The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers. */

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0777555148");

const phoneBookDEF = new Map();
phoneBookDEF.set("Darryl", "0123456789");
phoneBookDEF.set("Eugene", "0333444555");
phoneBookDEF.set("Francis", "0111222555");

function printPhoneBook(contacts) {
  return Map.get(contacts);
}

const mainPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
for (let names of mainPhoneBook.keys()) {
  console.log(names)
}

/* 
a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book
*/

// --------------------------------------------------------------------------------------------------------------------- //

/* Given the below salaries object, perform the following tasks.
a) Write a function sumSalaries(salaries) that calculates and returns the total of all
salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the
person earning the highest salary */

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

function sumSalaries(salaries) {
    let salaryTotal = 0 ;
   for (let value of Object.values(salaries)) {
        salaryTotal = salaryTotal + value;
   }
   return salaryTotal
}



function topEarner(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
// --------------------------------------------------------------------------------------------------------------------- //

/* The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:

a) Print the total number of minutes that have passed so far today

b) Print the total number of seconds that have passed so far today

c) Calculate and print your age as: 'I am x years, y months and z days old'

d) Write a function daysInBetween(date1, date2) which calculates and returns the
amount of days in between the two given dates. */

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
