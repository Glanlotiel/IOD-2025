/* isNaN(value) converts its argument to a number and then tests it for being NaN (not a number). We need to use this
because NaN != NaN: */
console.log(isNaN(NaN)); // true
console.log(NaN == NaN); //false

// isFinite(value) converts its argument to a number and returns true if it is a regular number, not NaN/Infinity/-Infinity

console.log(isFinite(1 / 3)); // true, regular number
console.log(isFinite("String")); // false, because converts to NaN
console.log(isFinite(Infinity)); // false, because represents infinite number
