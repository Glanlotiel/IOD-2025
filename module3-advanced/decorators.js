/* Decorators
A decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function. It can be
seen as “features” or “aspects” that can be added to a function. We can add one or add many of these features without
changing the original function code! Decorators are also sometimes called higher order functions, or functional composition. 
Use cases:
We can use decorators for many things, but some typical examples include adding logging, timing, validation or caching
features.

Use case: adding logging/timing information
*/

function printGreeting(name) {
  // simple undecorated function
  console.log("Hello, " + name);
}
printGreeting("Undecorated");
function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function (name) {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction(name); // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated"); // we can still call the decorated version in the same way

// --------------------------------------------------------------------------------------------------------------------------------------//
// caching

function slow(x) {
  // there can be a time-consuming job here, like adding up to a large number
  let random = 0,
    goal = Math.floor(Math.random() * x * 1_000_000); // random large number
  console.log(
    `slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`,
  );
  for (let i = 0; i < goal; i++) random++;
  return random; // return large number after counting to it
}
function cachingDecorator(origFunction) {
  // decorator takes a function as parameter
  const cache = new Map(); // can also include outer environment variables via a closure
  return function (x) {
    // decorator returns same function with extra bits - caching
    if (cache.has(x)) {
      // if the key exists in the cache,
      console.log("returned cached value for " + x);
      return cache.get(x); // read and return the result from it
    }
    let result = origFunction(x); // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
  };
}
const fast = cachingDecorator(slow); // we can decorate the original slow function to use caching and make it fast
const fastTimed = loggingTimingDecorator(fast); // we can decorate the fast version to include timing for testing
fastTimed(8); // first time will still be slow because it's uncached
fastTimed(8); // but every time after this will be much faster because result is cached

// --------------------------------------------------------------------------------------------------------------------------------------//

/* The previous decorator function examples work by directly executing the original function with a fixed, known number of
arguments, eg: */

// let result = origFunction(x)
// // otherwise, call the original function and store the result

/* However, we usually don’t know how many arguments the original function has, and need to make it generic so that it
supports any amount. Our current examples also work only on functions with no reliance on context, or this. To truly make a
reliable decorator function, we need a way to forward the execution of the original function, regardless of its arguments and
context. */

// --------------------------------------------------------------------------------------------------------------------------------------//

// func.apply and func.call

/* The previous decorator function examples work by directly executing the original function with a fixed, known number of
arguments, eg: 

func.call(context, . . .args);
func.apply(context, args);

Both call and apply are used to bind the context to a function func when executing it, and pass in a variable number of
arguments args:

• call accepts a comma-separated list of args, or use the spread syntax … to unpack and pass an
iterable variable args as the list.
• apply accepts only an array or array-like variable containing the args.

For objects that are both iterable and array-like, such as a real array, we can use either. apply will probably be faster,
because the JS engine optimizes it. 

For objects that are both iterable and array-like, such as a real array, we can use either. apply will probably be faster,
because the JS engine optimizes it. */

function loggingTimingDecorator(originalFunction) {
  // same decorator function as before
  return function () {
    // BUT now the returned function doesn't name its arguments from here
    console.time("Function timer");
    console.log(`\nExecuting function ...`);
    //const result = originalFunction(name); // WON'T work as name is now undefined
    //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
    const result = originalFunction.apply(this, arguments); // and so does this - try out both
    console.log(arguments); // [Arguments] { '0': 8 }
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}
// --------------------------------------------------------------------------------------------------------------------------------------//

/* Using call and apply also ensures the right context is used when forwarding function execution. This is needed when the
function relies on this. */

let worker = {
  getMultiplier() {
    return Math.floor(Math.random() * 1_000_000); // large random number
  },
  slow(x) {
    let random = 0,
      goal = x * this.getMultiplier(); // needs context to work
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return random; // return large number
  },
};
worker.slow(5); // works, context comes from before the dot, ie. worker
worker.fast = cachingDecorator(worker.slow); // without call/apply, context is lost
worker.fast(3); // TypeError: Cannot read properties of undefined (reading 'getMultiplier')

// --------------------------------------------------------------------------------------------------------------------------------------//
/* call Use Case: Borrowing a method 
Many utility functions such as map, filter, slice, etc. can be accessed through an instance of the object they are attached to.
For example, map() is defined on the Array object, and can be called on any array instance. We can borrow these utility
functions using call to supply a different instance as the context: */

function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise
function getOddNumbers() {
  // arguments is not an array, but it 'borrows' the filter function from Array by using call
  return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
}
let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)

// --------------------------------------------------------------------------------------------------------------------------------------//
/* all Use Case: Inheriting from a constructor function
We can use call inside a constructor function to inherit from a parent, by passing a custom context representing the child, as
well as any arguments: */

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}
function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}
const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`,
);

