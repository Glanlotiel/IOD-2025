// An empty object (‘empty cabinet’) can be created using one of two syntaxes:

//                                         Object constructor

const user = new Object(); // creates a new empty object

//Object literal (more common)

const user = {}; //creats a new empty object.

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                       Object with properties
We can immediately put some properties into {…} as key:value pairs. A property has a key (also known as
name or identifier) before the colon : and a value to the right of it. */

const user = {
  // user object contained within curly braces
  name: "joe", // string property with key 'name' and value 'joe'
  age: 20, // numeric property with key 'age' and value 20
  "has a dog": true, // multi-word property key 'has a dog' with boolean value true
};

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                       Object with properties
We can get, set or delete the value of a property key */

console.log(user.name); // get object property called name and log it
let dogOwner = user["has a dog"]; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age

user.location = "NSW"; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                      Property name limitation
Object property names (keys) are automatically converted to strings. So be
careful if using both numeric and string property names/keys: */

const object = {
  2: "value of numeric property",
  2: "value of string property",
};
console.log(object); // { '2': 'value of string property' } since 2 and ‘2’ are same

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                       Property existence test
It is possible to access any property of an object. Reading a non-existing property just returns undefined. So we can take
advantage of implicit boolean conversion to check whether the property exists. */

const phone = {
  model: "iPhone 11",
  color: "black",
};

if (phone.color) console.log(`My ${phone.model} is ${phone.color}`); // prints message
if (phone.storage) {
  // undefined counts as false, so the below won't print
  console.log(`My ${phone.model} has ${phone.storage}GB`);
}

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                              Iteration
When we have multiple things stored in a single variable, it is common to want to loop over each one of them and
perform the same operation. There are many options for achieving this in JS depending on the type of data and
operation. One of the most basic is a for loop: */

let goal = 5;
for (let i = 0; i < goal; i++) {
  console.log(`Iteration ${i} of ${goal}`);
}

/* We typically have an index variable (i) to keep track of which iteration we are up to, a limit or total number of
iterations, and a way to move to the next index. */

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                          Object Iteration
To walk over all keys of an object, there exists a special form of for loop: for … in. */

const phone = {
  model: "iPhone 11",
  color: "black",
  storage: 64,
};
for (let key in phone) {
  // iterates over each property in the phone object, stores in ‘key’ variable
  console.log("key: " + key); // prints each object property name (key) in turn
  console.log("value: " + phone[key]); // prints each object value in turn
}

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                            References
Objects are stored and copied by reference, whereas primitive values: strings, numbers, booleans, etc., are always copied as
a whole value. A variable assigned to an object stores not the object itself, but its address in memory, in other words a
reference to it. */

let person1 = { name: "Anna" }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = "Brian";
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = "Carly"; // string - stored by value
let person4 = person3; // person4 points to separate memory location than person3, but both store same
value;
person3 = "David";
console.log(person4); // still Carly, since person3 and person4 are string primitives and store
// independent values

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                           Shallow Copy
Creates a new object and replicates the structure of the existing one by iterating over
its properties and copying them on the primitive level. */

const user = { name: "Elliot", age: 27 };
const userClone = {}; // empty object, refers to different memory location
for (let key in user) {
  // iterate over user properties
  userClone[key] = user[key]; // re-create them in userClone
}
console.log(userClone); // { name: 'Elliot', age: 27 }

// --------------------------------------------------------------------------------------------------------------------------------- //
/*                                   Shallow Copy with Object spread
Simpler and more common to create a ‘shallow copy’ with spread syntax … */

const userClone = { ...user }; // spread or unpack user properties into new object
console.log(userClone); // { name: 'Elliot', age: 27 }

// We can also override values or add in new properties while doing this:

const userClone = { ...user, age: 28, location: "New Zealand" };
console.log(userClone); // { name: 'Elliot', age: 28, location: 'New Zealand' }

// Or merge multiple objects into a single new object:
const vehicle = { make: "Toyota", model: "Camry" };
const mergedUser = { ...user, ...vehicle };
console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' }

// --------------------------------------------------------------------------------------------------------------------------------- //
/*                                              Deep clone
Shallow cloning will still result in references to non-primitive object properties (such as nested objects). Deep cloning
(not natively supported, see Lodash Documentation and Deep copy will clone all levels of an object. */
const box1 = {
  weight: "20kg",
  dimensions: {
    // nested object property
    width: "30cm",
    height: "10cm",
  },
};
const box2 = { ...box1 }; // shallow clone
box1.dimensions.height = "12cm"; // change box1 nested object property
console.log(box2); // box2 references box1 dimensions and picks up height change

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                              Methods
A function that is a property of an object is called its method. */

const user = {
  name: "Bilbo Baggins",
  sing: function () {
    // method of user object
    console.log("Roads go ever ever on");
  },
  sing2() {
    // shorthand method syntax, does same as above
    console.log("Over rock and under tree");
  },
};
user.sing(); // Roads go ever ever on
user.sing2(); // Over rock and under tree

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                         Methods with context
It is common that an object method needs to access the information stored in the object to do its job. To access the
object, methods can use the this keyword. The value of this is the object before dot, the one used to call the method. */

const user = {
  name: "Bilbo Baggins",
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
// 'user' is before the dot, provides the context where 'this' comes from
user.printGreeting(); // Hello, I'm Bilbo Baggins

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                          this behavior
The value of this is evaluated during run-time, depending on the context. We will revisit ways to manage it, but for
now consider it a generic way to reference the current object. */

const user = {
  name: "Bilbo Baggins",
  printThis() {
    console.log(this); // 'this' is the current object
    return this; // if we return it, we can 'chain' object methods together
  },
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
  },
};
user.printThis().printGreeting(); // methods chained together, works because printThis returns this

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                        Constructor function
Standard object {…} syntax allows us to create one object. But often we need to create many similar objects, like multiple
users or menu items and so on. That can be done in a few ways, such as using constructor functions and the new operator. */

function User(first, last) {
  // constructor function
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
}
// we can create multiple users with different names
let user1 = new User("Tim", "Smith"); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()); // true

/* Constructor functions are named with a
capital letter first.

Constructor functions should be executed
only with “new” operators.

Constructor functions can contain other
functions */

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                      Object generations with new
A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned. */

function User(first, last) {
  // constructor function
  //this = {}; // implicitly
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
  //return this; // implicitly
}

// --------------------------------------------------------------------------------------------------------------------------------- //

/*                                     Object generation in ES6
In ES6, the new syntax keyword class is
introduced. Nowadays we mostly use classes
instead of constructor functions to set up
blueprints for objects and create multiple
instances. */
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  hasShortName() {
    return this.first.length >= 3;
  }
}
let user2 = new User("Tina", "Smith"); // need to use 'new'
console.log(user2); // User { first: 'Tina', last: 'Smith' }
console.log(user2.hasShortName()); // false

/* Classes have an explicit constructor function and
a slightly different internal syntax, but still use
the new syntax when creating. We will revisit
them in later material. */
