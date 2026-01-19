let mountains = ['Everest', 'Fuji', 'Nanga Parbat']; //Java arrays always start a 0, which is why Everest is value "0"
console.log(mountains[0]);
console.log(mountains[1]);
console.log(mountains[2]);

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas);
seas.push('Red Sea');   
//push will add an item to the end of an array.

console.log(seas); 
//unshift will put it at beginning of the array.

seas.unshift('Adriatic Sea')
console.log(seas) 

//pop() removes elements from the end of an array.
let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log(lastRiver);
console.log(rivers); 
//shift() removes elements from the beginning of an array.
let firstRiver = rivers.shift();
console.log(firstRiver); // Mississippi
console.log(rivers); // [ 'Amazon' ]

//indexOf() will find an index of an element; placement of.
let fujiIndex = mountains.indexOf("Fuji")
console.log(fujiIndex)

// length will find the number of elements within the array.

let numSeas = seas.length;
console.log(numSeas);