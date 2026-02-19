/* Map is a collection of keyed data items, very much like an Object. Objects use only
string keys, but a Map allows keys and values of any type.

new Map(): creates the map
map.set(key, value): stores the value by the key, and returns map itself
map.size: returns the current element count */

const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
 { name: 'John' } => { phone: '0412345678' }

 /* map.get(key): returns the value with the matching key, or undefined if key doesn’t exist in map
map.has(key): returns true if the key exists, false otherwise
map.delete(key): removes the value with the matching key
map.clear(): removes everything from the map */

console.log( exampleMap.get('1') ) // second string one - gets value for matching key
console.log( exampleMap.get(2) ) // undefined - key doesn't exist so no value
console.log( exampleMap.has(1) ) // true - key does exist
console.log( exampleMap.delete(true) ) // true - removes item and returns true if successful
exampleMap.clear() // removes all items from map
console.log( exampleMap ) // Map(0) {}

/* map.keys(): returns an iterable (not an array, but similar) for keys
map.values(): returns an iterable (not an array, but similar) for values
map.entries(): returns an iterable for entries [key, value]. Used by default in for .. of. */

const recipeMap = new Map([
 ['flour', '1 cup'],
 ['milk', '1/2 cup'],
 ['eggs', 2],
 ['butter', '50g']
])
for (let ingredient of recipeMap.keys()) {
 console.log(ingredient) // flour, milk, eggs, butter
}
for (let quantity of recipeMap.values()) {
 console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
}
for (let item of recipeMap) { // same as recipeMap.entries()
 console.log(item) // ['flour', '1 cup'], (and so on)
}

// --------------------------------------------------------------------------------------------------------------------- //

                                           /* Conversions with Object

Object.fromEntries
Create an Object from Map.entries(). Since Objects and Maps are quite similar, we
can convert from one to the other: */

const priceMap = new Map([
 ['banana', 1],
 ['pineapple', 2],
 ['watermelon', 5]
])
const priceObject = Object.fromEntries(priceMap)
console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }

// Object.entries
// Create a Map from an Object using Object.entries(object) inside the Map constructor.

const priceObject = { banana: 1, pineapple: 2, watermelon: 5 }
const priceMap = new Map( Object.entries(priceObject) )
console.log(priceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap.get('banana')) // 1

// --------------------------------------------------------------------------------------------------------------------- //

/* Maps are a versatile, efficient data structure for managing key-value data, and provide several advantages
over regular objects and arrays:
Speed: Map is faster for adding, searching, and deleting data, ideal for frequently updated data.

Flexibility: It allows any data type as a key, including objects and functions, unlike basic objects.

Useful methods: Built-in methods like has, get, and forEach simplify data handling.

Some common, practical uses for Maps include:
Caching (or ‘memoising’) frequently accessed or expensive-to-calculate data
Organizing data with non-string keys */

// Simulate fetching external data, which can be slow
function fetchExternalData(id) {
 console.log(`Fetching data for ID: ${id}`);
 const data = `Data for ID: ${id}`; // Simulated data
 return data;
}
// Create a Map for caching
const cache = new Map();
function getCachedData(id) {
 // Check if data is already in the cache
 if (cache.has(id)) {
 return cache.get(id); // return cached value, no expensive lookup
 }
 // If not in cache, fetch "external" data and store in cache for next time
 const data = fetchExternalData(id);
 cache.set(id, data);
 return data;
}
// Example usage
console.log('#1: ' + getCachedData(1)); // First time: fetches "external" data and caches result
console.log('#2: ' + getCachedData(1)); // Other times: can fetch result from cache, much faster

