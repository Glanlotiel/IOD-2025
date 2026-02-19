/* Iterable objects are special objects (such as arrays) which can step through each one in a series of multiple values in a for .. of
loop.

String, Array, Map and Set are all built-in iterables, so they can be used in a `for .. of` loop.

Standard objects are not iterable. Custom objects can be made iterable by implementing the iterable protocol, but this
is rarely done. */

const animalsArr = ["tiger", "lion", "elephant", "giraffe"];
for (let animal of animalsArr) {
  console.log(animal);
} // prints each animal in turn
const animalObj = { name: "tiger", genus: "panthera", class: "mammal" };
for (let property of animalObj) {
  console.log(property);
} // TypeError: animalObj is not iterable
