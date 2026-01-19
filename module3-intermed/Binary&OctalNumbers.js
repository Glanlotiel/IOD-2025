/* Binary (base 2 : 0 and 1) and octal (base 8 : 0-7) numeral systems are rarely used, but are supported using the 0b and 0o
prefixes.
Any number in JS beginning with a 0 is also interpreted as octal, which can lead to issues if treating phone numbers as
numbers instead of strings: */

const mobile = 041234567;
console.log(mobile); // 8730999 - decimal equivalent

const binary = 0b11111111; // binary form of 255
const octal = 0o377; // octal form of 255

console.log(binary); //255
console.log(binary === octal); //true
