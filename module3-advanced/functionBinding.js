// --------------------------------------------------------------------------------------------------------------------------------------//

/* issue of losing this
If a function relies on context (this) and is passed as a reference instead of being called directly, its context is lost. */

const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
user.sayHi(); // called directly, works! Hi, John
setTimeout(user.sayHi, 1000); // passed as reference, fails! Hi, undefined

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Solution 1 for missing this
We can wrap it inside a function. This allows the context to come from before the dot (ie. the user object) and references to
this work as expected. */

const user2 = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
setTimeout(function () {
  user2.sayHi();
}, 1000); // works! Hi, John
setTimeout(() => user2.sayHi(), 1000); // same as above, arrow function (more common; professor favorite too)

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Solution 2 for missing this
We can explicitly bind the right “context” into the function reference.
Syntax 
const boundFunc = func.bind(context);


The fix with bind*/

const user3 = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
const boundSayHi = user3.sayHi.bind(user3); // new function reference with user context explicitly bound
setTimeout(boundSayHi, 1000); // works! Hi, John

// --------------------------------------------------------------------------------------------------------------------------------------//
