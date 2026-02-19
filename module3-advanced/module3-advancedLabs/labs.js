/* 1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by. */

function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
let counter2 = makeCounter();
counter1(); // 1
counter1(); // 2
counter2();
counter2();
function makeCounterB(startFrom) {
  let currentCount = startFrom;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter3 = makeCounterB(5);

counter3();
counter3();

function makeCounterC(startFrom, incrementBy) {
  let currentCount = startFrom;

  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter4 = makeCounterC(10, 5);

counter4();
counter4();

/* 2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why? 4, 3, 2 , 1. Two and One should be self explanatory, but four has no delay while 0 is still a technical delay.
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all. */

const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

let fifthTimerRef = setTimeout(
  delayMsg,
  10 * 1000,
  "#5: Delayed by 10 seconds",
);

clearTimeout(fifthTimerRef);

/* 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement. */
function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// 1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
// --------------------------------- //
function debounce(func) {
  let timeOut;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(func, 1000);
  };
}
// --------------------------------- //
function debounceB(func, ms) {
  let timeOut;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(func, ms);
  };
}
// --------------------------------- //
function printMeC() {
  console.log(`printing debounced message C ${msg}`);
}

printMeC = debounceC(printMeC, 1200);

setTimeout(printMeC, 100, "Message 1");
setTimeout(printMeC, 200, "Message 2");
setTimeout(printMeC, 300, "Message 3");

function debounceC(func, ms) {
  let timeOut;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(func, ms, msg);
  };
}

/* 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.
b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing
c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping. */

function printFibonacci() {
  let first = 1;
  let second = 2;
  console.log(first);
  console.log(second);

  setInterval(function printNext() {
    let next = first + second;
    console.log(next);

    first = second;
    second = next;
  }, 1000);
}

//-------------------------//

function printFibonacciTimeouts() {
  let [first, second] = [1, 1];
  console.log(first);
  console.log(second);

  setTimeout(
    function printNext(first, second) {
      let next = first + second;
      console.log(next);

      setTimeout(printNext, 1000, first, second, next);
    },
    1000,
    first,
    second,
  );
}

//-------------------------//

function printFibonacciLimit(limit) {
  let first = 1;
  let second = 1;
  console.log(first);
  console.log(second);

  let counter = 2;

  let intervalRef = setInterval(function printNext() {
    let next = first + second;
    console.log(next);

    first = second;
    second = next;

    counter++;
    if (counter == limit) clearInterval(intervalRef);
  }, 1000);
}

/* 5. The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why? */

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
setTimeout(car.description, 200); //fails

/* a) Fix the setTimeout call by wrapping the call to car.description() inside a
function */

setTimeout(() => car.description(), 200);

// b) Change the year for the car by creating a clone of the original and overriding it

car = { ...car, year: 2026 };

/* c) Does the delayed description() call use the original values or the new values from
b)? Why? 

        It works but prints the new year value below instead of the original.
*/

/*d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function*/

let describeCar = car.description.bind(car);

/* e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d) */

setTimeout(describeCar, 400);
car = { ...car, year: 2025 };

/* 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds. */

function multiply(a, b) {
  console.log(a * b);
}

/* a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters */

Function.prototype.delay = function (ms) {
  let originalFunction = this;
  return function (arg1, arg2) {
    setTimeout(originalFunction, ms, arg1, arg2);
  };
};

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
/* b) Use apply to improve your solution so that delayed functions can take any number of
parameters */

Function.prototype.delayB = function (ms) {
  let originalFunction = this;
  return function () {
    setTimeout(() => originalFunction.apply(this, arguments), ms);
  };
};

/* c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works. */

function multiply4(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply.delayB(500)(5, 5, 5, 5);

/* 7. The following DigitalClock class uses an interval to print the time every second once
started, until stopped. */

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

/* a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied. */

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix);
    this.precision = precision ? precision : 1000;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
const myPreciseClock = new PrecisionClock("my precise clock", 2000);
myPreciseClock.start();

/* b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied. */

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime) {
    super(prefix);
    this.wakeupTime = wakeupTime ? wakeupTime : "07:00";
  }

  checkDisplay() {
    const now = new Date();
    const wakeupHours = this.wakeupTime.substring(0, 2);
    const wakeupMins = this.wakeupTime.substring(3);

    if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) {
      console.log("Wake up!");
      this.stop();
    } else {
      this.display();
    }
  }

  start() {
    this.checkDisplay();
    this.timer = setInterval(() => this.checkDisplay(), 1000);
  }
}

const myAlarmClock = new AlarmClock("My alarm clock:", "17:00");

myAlarmClock.start();

/* 8. Using the following starter code, create a decorator function to validate function arguments
as strings. Test it by decorating the given orderItems function below. */

function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
// console.log(validatedOrderItem("Apple Watch")); // should run the function
// console.log(validatedOrderItem(123)); // should throw an error
const validateOrderItems = validateStringArgs(orderItems);
/* a) Create a decorator function validateStringArg(fn) which will validate an
argument passed to fn to ensure that it is a string, throwing an error if not */

function validateStringArg(fn) {
  return function (arg) {
    if (typeof arg !== "string") {
      throw new Error(`Argument must be a string: ${arg}`);
    }
    return fn(arg);
  };
}

/* b) Extend orderItems to use the ... rest operator, allowing multiple item name
arguments, and include them all in the returned string */

function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

/* c) Extend the decorator function to validate as strings all arguments passed to fn */

function validateStringArgs(fn) {
  return function () {
    for (let arg of arguments) {
      if (typeof arg !== "string") {
        throw new Error("All arguments must be strings");
        return;
      }
    }
    return fn.apply(this, arguments);
  };
}

/* d) When testing the decorated function, use try-catch blocks to handle errors thrown for
non-string arguments */

try {
  console.log(validatedOrderItem("Apple Watch"));
} catch (err) {
  console.log(err);
}

/* 9. We can delay execution of a function using setTimeout, where we need to provide both
the callback function and the delay after which it should execute.
a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below



b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it



c) Update the testing code to catch rejected promises and print a different message
d) Try to update the then and catch messages to include the random delay value */

function randomDelay() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}

randomDelay().then((delay) =>
  console.log("There appears to have been a delay."),
);

function randomDelayB() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    setTimeout(() => (delay % 2 === 0 ? resolve : reject, delay * 1000)),
  );
}

randomDelayB()
  .then(() => console.log("successful delay"))
  .catch(() => console.log("failed delay"));

function randomDelayD() {
  let delay = Math.ceil(Math.random() * 20);
  return new Promise((resolve, reject) =>
    setTimeout(delay % 2 === 0 ? resolve : reject, delay * 1000, delay),
  );
}

randomDelayD()
  .then((delay) => console.log("Successful delay of " + delay + " seconds"))
  .catch((delay) => console.log("Failed delay of " + delay + " seconds"));

/* 10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results. */

// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from "node-fetch";
globalThis.fetch = fetch;
function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function asyncFetchURLData(url) {
  let fetchResponse = await fetch(url);
  if (response.status === 200) {
    let responseJson = await fetchResponse.json();
    return responseJson;
  } else {
    throw new Error(`Request failed with status ${fetchResponse.status}`);
  }
}

async function asyncFetchMultipleURLData(urls) {
  return Promise.all(
    urls.map(async (url) => {
      let response = await fetch(url);
      return response.json();
    }),
  );
}

try {
  let responseData1 = await asyncFetchURLData(
    "https://jsonplaceholder.typicode.com/todos/1",
  );
  console.log(responseData1);

  let responseData2 = await asyncFetchMultipleURLData([
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
  ]);
  console.log(responseData2);
  let responseData3 = await asyncFetchURLData(
    "https://jsonplaceholder.typicode.com/fake",
  );
  console.log(responseData3);
} catch (error) {
  console.log(error.message);
}
