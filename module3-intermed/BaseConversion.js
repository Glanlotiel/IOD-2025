/* toString(base) on numbers returns a string representation in the number system with the given base. The default base is 10
but it can range from 2 to 36. 

base=16 is used for hex colors, character
encodings etc. There are 16 possible digits - 0..9
and A..F.

base=2 is mostly for debugging bitwise operations,
with 2 possible digits - 0 and 1.

base=36 is the maximum, with 36 possible digits -
0..9 and A..Z. */

const ff = 255;
const ee = 238;
const dd = 221;
console.log(ff.toString(16)); //ff

//convert rbg colorcode to hexadecimal

console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`); //#ffeedd
