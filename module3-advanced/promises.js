/* A Promise represents the eventual completion (or failure) of an asynchronous operation. It provides a way to wait for an
unknown period of time and then execute certain code once a result (or an error) is returned.

We can produce (create) promises explicitly, but most often we will consume (use) promises from other asynchronous
code, such as database manipulation or HTTP requests.

Producer Syntax: Promise constructor takes a single argument which is a function, with resolve and reject callback
functions as arguments. */

const promise = new Promise(function (resolve, reject) {
  // executor
});

/*
Consumer Syntax: uses the then, catch and finally functions of an existing promise to define what should happen when the
asynchronous operation succeeds or fails.

then - function that executes when promise resolves (success)
*/
promise.then(
  (result) => console.log(result), // prints if/when promise resolves successfully
  (error) => console.error(error),
); // optional, prints if/when promises completes with error

//catch - function that executes when promise rejects (failure)
promise
  .then((result) => console.log(result)) // prints if/when promise resolves successfully
  .catch((error) => console.error(error)); // prints if/when promises completes with error

//finally - function that executes when promise settles (either success or failure)

promise
  .finally(() => console.log("promise is settled")) // prints when promise settles
  .then((result) => console.log(result)) // prints if/when promise resolves successfully
  .catch((error) => console.error(error)); // prints if/when promises completes with error

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Simple example using arrow functions, which illustrates how we can create (produce) a simple promise returning a delayed,
random success/failure outcome, and then respond to (consume) the outcome scenarios. */

// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => {
  // resolve/reject are callback functions
  if (Math.random() > 0.5)
    setTimeout(() => resolve("Random number ok"), 250); // success
  else setTimeout(() => reject("Random number too low"), 250); // failure
});
promise // consume the promise by responding to outcomes when they happen
  .finally(() => console.log("Wait is over, promise has settled.")) // always prints
  .then((result) => console.log("Success! " + result)) // prints resolve msg
  .catch((error) => console.log("Error! " + error)); // prints reject msg

// --------------------------------------------------------------------------------------------------------------------------------------//
/* fetch is a browser-based function that sends HTTP requests to retrieve data from other servers. Since this type of operation
is asynchronous, it returns a promise we can use to process the results once it completes. */

/* <html>
<body>
<h2>Check the Dev Inspector Console</h2>

<script>
fetch('https://reqres.in/api/users') // request data from this server
    // when it completes, access the JSON from the HTTP response sent by the resolved promise
    .then(response => response.json()) // .json() also returns a promise
    .then(json => console.log(json))   // log the returned JSON
    .catch(error => console.error(error)) // log errors
</script>

</body>
</html> */

// --------------------------------------------------------------------------------------------------------------------------------------//
//Chaining
/* if we have a sequence of asynchronous tasks to be performed one after another (as in the previous fetch example), we
can chain the .then() calls one after the other. Any value returned from .then() is itself a promise: */

let start = 10;
new Promise((resolve, reject) => {
  resolve(start); // resolve promise successfully with value of 10
})
  .then((result) => {
    // when resolve is called, it triggers .then()
    console.log(result);
    return result + start; // values returned from .then() are also promises
  })
  .then((result) => {
    // so we can chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  })
  .then((result) => {
    // we can continue to chain them together
    console.log(result);
    return result + start; // increasing result by 10 each time
  });
// prints 10, 20, 30

// --------------------------------------------------------------------------------------------------------------------------------------//

/* A handler, used in .then(handler) may explicitly create and return a promise, which can also be used for promise
chaining: */

let start = 10;
new Promise((resolve) => setTimeout(() => resolve(start), start * 10))
  .then((result) => {
    // promise handler function inside .then()
    console.log(result);
    let next = result + start;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // can explicitly return new promises
    console.log(result);
    let next = result + start;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  })
  .then((result) => {
    // which use the results of previously resolved promises in the chain
    console.log(result);
    let next = result + start;
    return new Promise((resolve) => setTimeout(() => resolve(next), next * 10));
  });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between

// --------------------------------------------------------------------------------------------------------------------------------------//

/* async and await are two important keywords that go hand in hand, and can be used to force promises to behave
synchronously - ie to wait until the promise resolves before executing the rest of the code body. They replace the .then()
and .catch() syntax of asynchronously processed promises. */

const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Simple successful promise"), 250);
});
// using .then to process asynchronously:
promise.then((msg) => console.log(msg));
// using await to process synchronously (if using await in a function it needs to be async):
let msg = await promise;
console.log(msg);

// --------------------------------------------------------------------------------------------------------------------------------------//

// async function

/* the word async before a function means a function always returns a promise. It is required when the function body
includes an await statement. The async and await keywords enable asynchronous, promise-based behavior to be written
more concisely using synchronous style code. */

async function asyncFunctionDeclaration() { ... } // function declaration syntax
const asyncFunctionExpression = async function() { ... } // function expression syntax
const asyncFunctionArrow = async () => { ... } // arrow function syntax

// --------------------------------------------------------------------------------------------------------------------------------------//

// await keyword

/* Must be used inside an async function. It makes JavaScript wait until that promise settles and returns its result. Any errors
can be caught with a try…catch. */

async function waitForPromise() { // async function allows synchronous promise handling internally
 // since we have synchronous code and no .catch(), we use try ... catch for errors
 try {
 let promiseResult = await promise; // waits here as long as promise needs to resolve
 console.log(`Success: ${promiseResult}`) // then continues executing other code
 return true;
 } catch(error) {
 console.error(`Failure: ${error.message}`)
 }
 //only gets here if return true above did NOT happen, ie. there was an error
 return false;
}

