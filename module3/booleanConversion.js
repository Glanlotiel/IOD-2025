// Boolean values are used in logical conditions. We can explicitly convert/create them by using the class function:

console.log(Boolean("")); // false - empty string
console.log(Boolean(0)); // false - zero value
console.log(Boolean(null)); // false - no value
console.log(Boolean(undefined)); // false - unknown value
console.log(Boolean(NaN)); // false - not a number
console.log(Boolean("false")); // true - non-empty string
console.log(Boolean(-1)); // true - non-zero number

// Implicit boolean conversions via an if condition, conditional statement or negation are far more common:

if ("") console.log("empty string is true"); // implicit "" conversion to false - won't print msg
if (undefined) console.log("undefined is true"); // implicit conversion to false - won't print msg

//Conditional statement:
console.log(NaN ? "NaN is true" : "NaN is false"); // NaN is false
console.log(0 ? "zero is true" : "zero is false"); // zero is false
console.log("hello" ? "hello is true" : "hello is false"); // hello is true

//Negation:
console.log(!undefined); // true - convert value to boolean then negate it (opposite)
console.log(!!""); // false - convert value to boolean then negate/toggle twice
