// console.log("Hello World")

// function sayHello() {
//     console.log("Hello")
// }

// sayHello()

// function sum(a, b) {
//     console.log(a + b)
// }
// sum(5, 3)

const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('cats are stupid.');
console.log(result); // Score: -2, Comparative: -0.666


// let helloText = "say Hi";
// let check = 4;
// if (check > 3) {
// let hello = "say Hello instead";
// console.log(hello); // "say Hello instead"
// }
// console.log(hello); // hello is not defined