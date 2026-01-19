//What are the results of these expressions? (answer first, then use console.log() to check)

"" + 1 + 0; // "10"
"" - 1 + 0; // "-1"
true + false; // 1
!true; // false
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9px
"$" + 4 + 5; // $45
"4" - 2; // 2
"4px" - 2; // NaN
" -9 " + 5; // -95
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
undefined == null; // true
undefined === null; // false
" \t \n" - 2; //
// 2

/* Which of the below are not giving the right answer? Why are they not correct? How can we
fix them? */

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; // 34, "3" and "4" concatenate when put into a string. You can fix them by assigning 3 and 4 rather than "3" and "4"
let multiplication = three * four; // 12, will not concatenate using the shared "+"
let division = three / four; // 0.75
let subtraction = three - four; // -1
let lessThan1 = three < four; // true
let lessThan2 = thirty < four; // true; 3 comes before 4. When comparing strings "3" will always be less than "4." To get false you would remove the ""

// Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); // will not print; implicit conversion to false - won't print msg
if ("0") console.log("#2 zero is true"); // will print; "0" is a string, thus is true.
if (null) console.log("null is true"); // will not print; implicit conversion to false - won't print msg
if (-1) console.log("negative is true"); // will print; is a number
if (1) console.log("positive is true"); // will print; is a number

/* Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do? */

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;

a + b < 10 ? (result += "less than 10.") : (result += "10 or more.");
// += in this case is concatenating the result with "less than 10" if the "if" function is true.

/* Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same. */

Name = "John";

function getGreeting(Name) {
  return "Hello " + Name + "!";
}

const getGreetingExpression = function (getGreeting) {
  console.log("Hello " + Name);
};

const getGreetingArrow = () => {
  console.log("Hello " + Name);
};

getGreetingExpression();
getGreetingArrow();

/* a) Complete the inigo object by adding a lastName property and including it in the
greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. HINT: see
https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator. */

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },

  getCatchPhrase: (person) => {
    return person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

/* The following object represents a basketball game and keeps track of the score as the
game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. Include the foul count in the half time and
full time console messages
d) Test your object by chaining all the method calls together in different combinations. */

const basketballGame = {
  score: 0,
  foul: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score + ". Foul Count is " + this.foul,
    );
    return this;
  },
  foulCount() {
    this.foul++;
    return this;
  },
  fullTime() {
    console.log(
      "Fulltime score is " + this.score + ". Foul Count is " + this.foul,
    );
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .foulCount()
  .freeThrow()
  .basket()
  .foulCount()
  .threePointer()
  .halfTime()
  .threePointer()
  .basket()
  .foulCount()
  .freeThrow()
  .freeThrow()
  .foulCount()
  .freeThrow()
  .fullTime();

/* The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object. */

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const sydneyClone = {};

for (let key in sydney) {
  sydneyClone[key] = sydney[key];
}

console.log(sydneyClone);

const london = {
  name: "London",
  population: 8_866_000,
  founded: "47 AD",
  timezone: "GMT",
};

const londonClone = {};

for (let key in london) {
  londonClone[key] = london[key];
}

console.log(londonClone);

/* Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why? 
      teamSports and cat1 changed. teamSports change because they are both references and can be added to/changed. Thus when Cat2.name is given a value, it becomes the new name. Similarly
      when I add list items to moreSports, it adds to the main array because that is the reference it is equal to. Dog2 is an independant variable because it is a string. 

e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent */

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = [...teamSports];
moreSports.push("Lacrosse");
moreSports.unshift("Football");

let dog2 = dog1;
dog2 = "Sampson";

let cat2 = {};
for (let key in cat1) {
  cat2[key] = cat1[key];
}
cat2.name = "Rascal";

console.log(teamSports, moreSports, dog1, cat1, cat2);

/* The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive. */

function Person(name, age) {
  ((this.name = name),
    (this.age = age),
    (this.human = true),
    (this.canDrive = () => this.age >= 16));
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  canDrive() {
    return this.age <= 16 ? false : true;
  }
}

let Person1 = new Person("Tim Smith", 16);
let Person2 = new Person("John Henry", 26);
let Person3 = new Person("Gary Jones", 14);

console.log(Person1.canDrive(), Person2.canDrive(), Person3.canDrive());
