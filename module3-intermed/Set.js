/* A Set is a special type of collection: a “set of values” (without keys), where each value is
unique and may occur only once.

new Set(iterable): creates the set, and if an iterable object is provided (usually an
array), copies values from it into the set.

set.add(value): adds a value, returns the set itself.

set.size: is the elements count. */

const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
names.add("Mateo");
names.add("Oliver");
names.add("Bruno");
console.log(names.size); // 5 - only the unique names
console.log(names); // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

/* set.delete(value): removes the value, returns true if value existed at the moment of
the call, otherwise false.

set.has(value): returns true if the value exists in the set, otherwise false.

set.clear(): removes everything from the set. */

const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
console.log(names.delete("Jack")); // true - successful delete
console.log(names.has("Jack")); // false - Jack no longer exists in set
console.log(names.has("Mateo")); // true - Mateo does exist in set
names.clear();
console.log(names); // Set(0) {}

// --------------------------------------------------------------------------------------------------------------------- //
/*                                              Iteration over Set

Loop over items in a set either with for .. of or using forEach */

const names1 = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);
// traditional style of for loop - works because Sets are iterable
for (let name of names1) {
  console.log(name);
}
// more concise for simple operations, newer syntax using arrow function
names.forEach((name) => console.log(name));

/* Sets are a powerful, efficient data structure in JavaScript for managing collections of unique
values, providing several advantages over regular arrays:

Uniqueness: Set automatically ensures that all values are unique, preventing duplicates
without needing to check if they already exist

Efficiency: Operations like adding, searching, and deleting values in a Set are typically
faster than with arrays, especially when dealing with large datasets
.
Useful methods: Built-in methods like has, get, and forEach make it easy to manage and
interact with the data.

Some common, practical uses for Sets include:
Easily filtering out duplicate values from datasets

Keeping track of items that should be stored without repetition, like user actions,
permissions, tags or visited URLs. */