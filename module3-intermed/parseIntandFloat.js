/* Numeric conversion using a unary plus + or Number() is strict. If a value cannot be interpreted exactly as a number, it fails
and results in NaN: */

console.log(+"100px"); // NaN - 100px is not a valid number

/* parseInt and parseFloat ‘read’ numbers from a string until they can’t. Instead of an error, the total number is returned.
The function parseInt returns an integer, whilst parseFloat will return a floating-point (decimal) number. */

console.log(parseInt("150px")); // 150 - stops at 'px'
console.log(parseFloat("2.5em")); // 2.5 - stops at 'em'
console.log(parseFloat("12.34.56")); // 12.34 - stops at second invalid decimal
console.log(parseInt("a123")); // NaN - can't parse the 'a' so stops
