/* JSON (JavaScript Object Notation) is a general format used to represent values and objects. 

It is described in the RFC 4627 standard, and is often used to send data between two separate applications via an API. 

It looks similar to JS object syntax, but all keys need to be double quoted as strings.

JSON.stringify method converts objects into JSON. */

const student = {
  name: "Sita",
  age: 28,
  courses: ["HTML", "CSS", "JS"],
  occupation: null,
};
console.log(JSON.stringify(student));
//{"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null}

/* JSON is a data-only language-independent specification, so some JavaScript-specific object properties are skipped by
JSON.stringify. Namely:

Function properties (methods)

Symbolic keys and values

Properties that store undefined */

const book = {
  title: "Gone With The Wind",
  printTitle() {
    // ignored
    console.log(this.title);
  },
  releaseDate: undefined, // ignored
};
console.log(JSON.stringify(book)); // {"title":"Gone With The Wind"}

/* No circular references with JSON.stringify. JSON can’t convert recursive structures into strings, and will throw an error if
you try: */

const room = {
  number: 23,
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup
JSON.stringify(meetup); // TypeError: Converting circular structure to JSON

// --------------------------------------------------------------------------------------------------------------------- //

/* Excluding and transforming: replacer

The second argument in JSON.stringify(value[, replacer, space]) is an Array of properties to encode or a mapping function
function(key, value).
replacer use case: filter out circular references */

console.log(
  JSON.stringify(meetup, ["title", "participants"]),
); /* just stringify the properties in
the array: {"title":"Strategy Conference","participants":["Chris","Tina"]} */

console.log(
  JSON.stringify(
    meetup,
    function (key, value) {
      if (key != "" && value == meetup)
        return undefined; // skip references to current object
      else if (typeof value == "function") return value.toString(); // stringify functions
      return value; // otherwise return original value unchanged
    },
    2,
  ),
); // use 2 spaces for nicer formatting

// --------------------------------------------------------------------------------------------------------------------- //

/* JSON.stringify : custom “toJSON”

Like toString for string conversion, an object may provide the method toJSON for to-JSON conversion. JSON.stringify
automatically calls it whenever available. */

const room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup)); // no more circular references as room stringifies to 23
// {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}

// --------------------------------------------------------------------------------------------------------------------- //

/* JSON.parse method

Converts a string back into an object by parsing it. Syntax: */

JSON.parse(str, [review]);

/* str is the JSON string to be decoded, reviver is an optional function(key, value) used to transform the value. Usually the
reviver function is not needed. */

const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-06-01",
};
const meetupString = JSON.stringify(meetup); // convert object to string
const meetupParsed = JSON.parse(meetupString, (key, value) => {
  // convert string to object
  if (!isNaN(Date.parse(value))) return new Date(value); // if valid date, create Date object
  return value;
});
console.log(meetupParsed); // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }

// JSON.parse for deep cloning

/* We said earlier that destructuring can be used to shallow clone an object - ideal when the original object contains no nested
properties and needs to be independent.

A deep clone is a copy of an object that not only duplicates its top-level properties, but also creates new instances of any
nested objects or arrays. 
With JSON.stringify() we can transform an object into a string, then back into a new object using
JSON.parse(): */


const box1 = {
 size: 'large',
 dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
 items: [ 'glasses', 'plates', 'cutlery' ]
}
const boxString = JSON.stringify(box1) // convert object to string
const box2 = JSON.parse(boxString) // convert string back to new object
// how could we check to make sure both boxes are the same but independent?
