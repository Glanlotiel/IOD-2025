/* Internally, numbers are represented as double precision floating point numbers, following the international IEEE 754
standard. This uses exactly 64 bits of memory to store a number: 52 for storing the number (between 0 and 1), 11 to
store the exponent (power of 2 to multiply the number) and 1 bit is for the sign. 

When the number is too big, it overflows the 64-bit storage and cannot be accurately represented, so it converts
to Infinity: */

const toobig = 1e350; // 1 * 10^350 - overflows storage

console.log(toobig); // infinity
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// --------------------------------------------------------------------------------------------------------------------------- //

/*                                               Imprecise Calculations
Because floating point numbers can’t be accurately represented in binary, (https://floating-point-gui.de/) some
operations lead to unexpected results: */

const point1 = 0.1;
const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`); // 0.1 + 0.2 = 0.30000000000000004

/* Precision is also lost when the number of digits reaches 16 or more, or for values greater than 253. In JS, integer numbers
are accurate up to 15 digits.

 Numeric literals with absolute values equal to 2^53 or greater are too large to be represented
accurately as integers. */

console.log(9_999_999_999_999_999); // 16 digits, prints as 10000000000000000
console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
