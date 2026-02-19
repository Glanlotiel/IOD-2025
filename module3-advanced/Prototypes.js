/* [[Prototype]] property
In JavaScript, objects inherit properties and functions from a prototype stored in a special hidden property [[Prototype]] (as
named in the specification), that is either null or references another object (such as Object).
It can be accessed in a few ways. Object.getPrototypeOf is the most reliable: */

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Object.setPrototypeOf (simplest) or Object.create (most control over property descriptors) are the recommended ways to
set a prototype */

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, {
  // creates a new object from prototype, with custom properties
  jumps: {
    // name of custom 'own' property for rabbit object
    value: true, // property descriptor to set the property value
    enumerable: true, // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
  },
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`); // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`); // own properties, then inherited ones

// --------------------------------------------------------------------------------------------------------------------------------------//

/* Constructor functions can also use prototypal inheritance, using a syntax called F.prototype. This is a regular property named
prototype on F, which is a constructor function with the first letter capitalized. */

function Rabbit(name) {
  // constructor function, first letter capitalized by convention
  this.jumps = true;
  this.name = name;
}
Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
let whiteRabbit = new Rabbit("White Rabbit");
console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`); // all properties

// --------------------------------------------------------------------------------------------------------------------------------------//
