/* Arrays are a data structure to store an ordered collection. Arrays are often used in JavaScript to store and manipulate
lists of related items. They can contain numbers, strings, objects and even other nested arrays.
See the MDN reference on arrays for complete and up-to-date details. */

const arr1 = new Array(1, 2, 3); // constructor, not often used

const arr2 = [1, 2, 3]; // array literal, much more common

console.log(arr1);
console.log(arr2);

//both do the same.

// --------------------------------------------------------------------------------------------------------------------- //

/*                       Arrays can be used to implement two common data structures in programming:

Queue Data Structure, FIFO (First In First Out)
-push appends an element to the end.
-shift gets an element from the beginning, advancing the queue, so that the
second element becomes the first.

Stack Data Structure LIFO (Last in First Out)
-push adds an element to the end (or the top).
-pop takes an element from the end. 

Methods that work with the end of the array:

pop extracts the last element of the array and returns it: */

const fruits = ["Apple", "Orange", "Pear"];
const lastFruit = fruits.pop(); // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]

// push appends an element to the end of the array:

fruits.push("Banana"); // adds to the end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]

/* Methods that work with the beginning of the array:

shift extracts the first element of the array and returns it: */

const fruits = ["Apple", "Orange", "Pear"];
const firstFruit = fruits.shift(); // removes and returns the first item
console.log(firstFruit); // Apple
console.log(fruits); // [ 'Orange', 'Pear' ]

// unshift adds the element to the beginning of the array:

fruits.unshift("Banana"); // adds to the beginning of the array
console.log(fruits); // [ 'Banana', 'Orange', 'Pear' ]

// --------------------------------------------------------------------------------------------------------------------- //
/*                                                       Internals
Arrays are not primitives, but special types of objects stored by reference. They are resizable and can contain a mix of data
types. They are indexed numerically beginning at 0, using square brackets. */

const fruits1 = ["Apple", "Orange", "Pear"];
const fruits2 = fruits1; // refers to same memory location
fruits1.push("Banana"); // add new item to the end of fruits1
console.log(fruits2); // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they both reference the same memory location
console.log("fruit at index 0: " + fruits1[0]); // Apple - accessed using numeric index 0
console.log("fruit at index 1: " + fruits1[1]); // Orange - accessed using numeric index 1

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                 Multidimensional arrays

Arrays can have items that are also arrays. We can use this ability for multidimensional
arrays, for example to store matrices. */

const matrix = [
  // 3x3 matrix
  [1, 2, 3], // row 0
  [4, 5, 6], // row 1
  [7, 8, 9], // row 2
];
console.log(matrix[1][1]); // 5, the value in row 1, column 1

/* Use double square brackets to access array elements in nested/internal arrays, starting
with the outermost array (row). */

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                   toString method
Arrays have their own internal implementation of the toString method that returns a
comma-separated list of elements.  */

const numbers = [1, 2, 3];
const strings = ["one", "two", "three"];
const empty = [];
console.log("Numbers: " + numbers); // Numbers: 1,2,3
console.log("Strings: " + strings); // Strings: one,two,three
console.log("Empty: " + empty); // Empty:

/* Arrays do not have an internal valueOf, they implement only toString conversion, so
empty array [] becomes an empty string. */

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                   slice method

Syntax */

arr.sliced([end], [end])

/* Slice returns a new array copying to it all items from index start to end (not including end). Negative
indexes work backwards from array end.*/

const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                 splice method
Syntax */

arr.splice(start[, deleteCount, elem1, … , elemN])

/* Splice can insert, remove and replace items in an array. It modifies the original array, starting from the
index start, removes deleteCount items and then inserts elem1, …, elemN at their place. It returns the
removed elements: */

const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")
console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                 concat method 
Syntax */
arr.concat(arg1, arg2…)

/* Concat creates a new array including values from other arrays and additional items. It accepts any
number of arguments: either arrays or values. */

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]
const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// --------------------------------------------------------------------------------------------------------------------- //

/*                                               lastIndexOf method
Syntax */
arr.lastIndexOf(item, from)

// The same as indexOf, but it looks from right to left until a match is found.

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndexFirst = marks.indexOf('B-')
let bIndexLast = marks.lastIndexOf('B-')
console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

// --------------------------------------------------------------------------------------------------------------------- //

/*                                              join method

Syntax */
arr.join(separator)

/*It returns a string of arr items joined by separator between them. When separator is omitted, the arr
elements are separated with a comma (,) */

const elements = ['Wind', 'Water', 'Fire', 'Air']
console.log( elements.join() ) // Wind,Water,Fire,Air
console.log( elements.join(' ') ) // Wind Water Fire Air
console.log( elements.join('; ') ) // Wind; Water; Fire; Air

// --------------------------------------------------------------------------------------------------------------------- //

/*                                              forEach method
Syntax */

rr.forEach(function(item, index, array) {
 // . . . Do something with item
});

/* forEach runs a function for every element of the array. This function can take 3 parameters (named as
needed): the array item, the array index, and the array itself. We always use the item, sometimes also
the index, rarely the array. */

const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
 console.log(`#${index}: ${hobbit}`) // runs once for every item in array
})

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                 find method

Syntax */

const result = arr.find(function(item, index, array) {
 // . . . If true is returned, item is returned and iteration is stopped, for
false scenario returns undefined
});

/* The function passed to find is called for
each array element. Its arguments can
be renamed. item is the element, index
is its index (optional), array is the array
itself (optional). The function evaluates
a given condition - when true, the
matched item is returned. */

const products = [
 { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
 { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]
// we usually use an arrow function - runs once for each array element until
condition is true
let jeans = products.find(product => product.title == 'Denim Jeans') // returns
matching item
let shirt = products.find(product => product.category == 'Shirts') // returns
matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category:
'Pants' }
console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category:
'Shirts' }

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                     filter method

Syntax */

const results = arr.filter(function(item, index, array) {
 // . . . If true is pushed to results and the iteration continues, and returns empty array if nothing found
});

// Syntax is similar to find, but filter returns an array of all matching elements.

const products = [
 { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
 { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
 { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products.filter(product => product.category == 'Shirts')
let under50 = products.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                    map method
Syntax */
const result = arr.map(function(item, index, array) {
 // return the new value instead of item
});
// It transforms the array by calling the function, which returns a transformation of each item, in a new array of results
let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5

// --------------------------------------------------------------------------------------------------------------------- //

/*                                                  sort Method
Syntax */

arr.sort(function compare(firstEl, secondE1) {..})

/* Sorts the array in place, changing its element order. It also returns the sorted array, but the returned value is usually
ignored, as arr itself is modified.

If compareFn is omitted, the array elements are sorted as strings. */

products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1
const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]

/* The comparison function provided to sort should take two parameters (eg. a and b), and return a positive value if a is
greater than b, a negative value if a is less than b, and 0 if they are equal. This is why we often use minus for calculating
numerical comparisons. */

const stringNums = ["1", "81", "41", "102", "35", "1004"]
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

// To keep a sorted array independent to the original, we need to clone it first:

const stringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums].sort()
console.log(stringNums) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]

// --------------------------------------------------------------------------------------------------------------------- //

/*                                              reverse method
Syntax */

arr.reverse();

//It reverses the order of elements in arr, modifies the original array, and returns a reference to arr

const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements.reverse() // modifies the original
const reversed2 = [...elements].reverse() // clone first to preserve the original
console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)
