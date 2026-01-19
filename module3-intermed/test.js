
/* Number, boolean and string primitives can still use certain special functions (built into their prototypes) in the
same way that objects can: */

const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)); // 1.23 fixed to two decimal places
console.log(n.toPrecision(10)); //1.234560000 - fills or rounds to number of digits

const hello = "hello world"; // primitive string
console.log(hello.toUpperCase()); // HELLO WORLD
console.log(hello.endsWith("world")); //true
