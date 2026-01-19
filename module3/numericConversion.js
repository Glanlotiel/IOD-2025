/* Conversion of other types of variables to numbers happens in mathematical functions and expressions
automatically, or we can do explicit conversions. */

// Explicit conversion - by using Number class function

console.log(Number(" 4 ")); // 4 - trims spaces
console.log(Number(null)); // 0 - intentionally empty value converts to 0
console.log(Number(undefined)); // NaN - non-existent value is unknown
console.log(Number(false)); // 0 - false converts to 0
console.log(Number(true)); // 1 - true converts to 1
console.log(Number("")); // 0 - empty string converts to 0
console.log(Number("not a number")); // NaN - non-empty strings beginning with chars cannot convert

/* Implicit conversion happens when using division / , multiplication * , subtraction - , or unary plus + , and JS
automatically converts strings to numbers (where possible) in order to perform the operation.
*/

console.log("6" / "2"); // 3
console.log("6" * "2"); // 12
console.log("6" - "2"); // 4
console.log(+"6"); // 6

/* Note: implicit numeric conversion does NOT happen when using + with two or more operands, as JS can (and
will) ‘add’ two strings by concatenating them. String concatenation is the operation of joining character strings
end-to-end. */
