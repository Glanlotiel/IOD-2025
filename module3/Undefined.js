/* The special value undefined makes a type of its own, similar to null but slightly different.
The meaning of undefined is that the variable exists but its value is not assigned.
If a value is declared, but not assigned, then its value is undefined. */

let location; // no value is assigned with the = operation

console.log(location); //undefined

// Null is the equivalent to undefined, but they are not strictly equal.

let location; // no assigned value, therefosre undefined
let age = null; // explicitly assigned null value

console.log(`${location} == ${age} ? ${location == age}`); // true (uses == to check value equivalence)
console.log(`${location} === ${age} ? ${location === age}`); // false (uses === to check type equality)

/* A ternary operator (?:) is a compact, single-line shorthand for an if-else statement in programming, 
taking a condition and two expressions,  returning one expression's result based on whether the condition is true or false 
(e.g., condition ? true_value : false_value). It's useful for assigning values or choosing between simple outcomes concisely, 
but complex or nested uses can harm readability. */
