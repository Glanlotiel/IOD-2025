let one = 1;
let two = 2;
let three = 3;

//standard PEMDAS order of operations. use brackets to override.

console.log(one + two - (three * two) / one); // -3

//shortcuts can modify numbers
// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
one += 1; // shorthand - add 1 to previous (also *=)
one++; // increment previous value (by 1)

// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
two -= 1; // shorthand - minus 1 from previous (also /=)
two--; // decrement previous value (by 1)


