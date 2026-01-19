/* Since objects are so generic, treating them as strings usually results in the generic [object Object] message. We can override
this by creating a custom toString method to specify the string format of our object: */

// const user = {
//   name: "John",
// };

// console.log("user" + user);

// User: [object Object]

const user = {
  name: "John",
  toString() {
    return this.name;
  },
};

console.log("User: " + user); // User: John
