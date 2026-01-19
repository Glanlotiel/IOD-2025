/* In JavaScript, the number type cannot represent integer values larger than (2**53-1) (that’s 9,007,199,254,740,991 - over 9 quadrillion), 
or less than -(2**53-1) for negatives. It’s a technical limitation caused by their internal representation, 
 which doesn’t often cause issues. 
BigInt value for numbers outside of this range is created by appending n to the end of an integer, 
which allows it additional memory space. */

const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers
console.log(bigint_valid == bigint_invalid); // false
