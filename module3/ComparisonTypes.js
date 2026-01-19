/* Comparison
When comparing values of different types using >, <, == and !=, JavaScript converts the values to numbers.
Comparison of different types */

console.log("2" > 1); // true - converts to 2 > 1
console.log("2" != 1); // true - converts to 2 is not equal to 1
console.log("02" == 2); // true - converts to 2 == 2
console.log(true == 1); // true - true converts to 1
console.log(false == 0); // true - false converts to 0
console.log(null == undefined); // true - both convert to 0

/* Replacing the == (equivalence) in the above with === (strict equality) will check for matching types as well and change
the results to false. Try it! */
