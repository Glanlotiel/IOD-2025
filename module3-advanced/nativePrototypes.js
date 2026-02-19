/* The prototype property is widely used by the core of JavaScript itself. All built-in constructor functions (eg. Array, Object,
Date, String, Number) use it. */

// Object.prototype

const obj = {}; // simple empty object
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true: its prototype is Object prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj))); // inherited properties from Object prototype

// Other built-in prototypes: Array, Date, Function etc. also keep methods in prototypes. Try the below for Date and String!

const arr = []; // simple empty array
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr))); //inherited properties from prototype

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Changing native prototypes
Native prototypes can be modified. BUT, BUT, BUT it is not recommended to do so unless it is polyfilling. Polyfilling is a piece
of code used to provide modern JS functionality on older browsers that do not natively support it. */

String.prototype.show = function () {
  // creates new 'show' function on built-in String prototype
  console.log(this);
};
"BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the
prototype;
// polyfilling for String.prototype
if (!String.prototype.repeat) {
  // if there's no such function in the prototype already
  String.prototype.repeat = function (n) {
    // define a repeat function to repeat the string n times
    return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
  };
}
console.log("La".repeat(3)); // LaLaLa

// --------------------------------------------------------------------------------------------------------------------------------------//
/* Borrowing from prototypes
Some methods of native prototypes are often borrowed, to provide the same functionality on a different type of variable. */

// define our own join() function for objects
const obj2 = {
  0: "Hello",
  1: "world",
  length: 2, // needed for join to work
};
obj2.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
console.log(obj2.join(",")); // Hello,world

// --------------------------------------------------------------------------------------------------------------------------------------//
