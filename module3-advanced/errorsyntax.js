/* We can define our own way of handling errors in JS before they crash our code.


try…catch syntax 

The try…catch construct has two main blocks: try, and then catch.*/

try {
  // code . . .
} catch (err) {
  // code . . .
}

// Only works for runtime errors, the code must be runnable as valid

try {
 const error = "mismatched quotes'
} catch (error) {
 console.log('will not catch above error')
}
// SyntaxError: Invalid or unexpected token - doesn't go to catch block

// --------------------------------------------------------------------------------------------------------------------------------------//
// Non-syntactical errors can be caught and handled, allowing other code to run: 

try {
 noSuchVariable;
} catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
 console.log('caught an error: '+ error.message) // all errors have a message property
}
// caught an error: noSuchVariable is not defined
console.log('even though an error occurred above, it was caught so code continues');

// Only synchronous errors can be caught; asynchronous errors still cause a crash:

try {
 setTimeout( () => noSuchVariable, 1000 );
} catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
 console.log('only synchronous errors! ' + error.message) // all errors have a message property
}
console.log('prints synchronous code then throws uncaught asynchronous error after 1 sec');

// --------------------------------------------------------------------------------------------------------------------------------------//
/*
The throw operator can be used in the try or catch block to intentionally cause a new or existing error to crash the
application for a specific reason:
*/

function checkJson(json) { // checks json argument for validity and ensures a name property
 try {
 const user = JSON.parse(json); // parse string into object
 if (!user.name) {
 throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
 }
 return true; // returns true (valid json) if no error was thrown above
 } catch (err) {
 if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
 console.log( "JSON Error: " + err.message );
 } else {
 throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
 }
 }
 return false; // returns false if any error occurred
}

// --------------------------------------------------------------------------------------------------------------------------------------//
/*
The finally clause is used when something in the try…catch block needs finalising in any case of outcome, regardless of
any thrown errors or return statements.
*/

function checkJson(json) {
 try {
 // ... as above
 return true;
 } catch (err) {
 //... as above
 }
 finally {
 console.log('at the end'); // always prints, even if returning true or throwing an error
 // used to complete operations and perform cleanup regardless if we hit errors or not,
 // eg. closing db connections, removing interval timers, cancelling event listeners, etc
 }
 return false; // returns false if any error occurred
}



