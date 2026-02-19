/* Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables.

Array destructuring
It “destructures” by copying items into variables. */

const mj = ["Michael", "Jordan"];
const [mjFirst, mjLast] = mj; // destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast); // Michael Jordan

// It ignores elements using commas

const [jcFirst, jcLast, , , jcPlace] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`); // Julius Caesar is a Roman
const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [one, two, three] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [[type, quantity]] = new Map([["apple", 4]]); // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

//It works with any iterable on the right-side.

const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [one, two, three] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [[type, quantity]] = new Map([["apple", 4]]); // Maps are iterable too
// now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

//It assigns to anything at the left-side.

const monarch = {}; // empty object
[monarch.title, monarch.name] = "King Charles".split(" "); // store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

// --------------------------------------------------------------------------------------------------------------------- //

// When looping with .entries() we can destructure into key and value variables

const teeProduct = {
  id: 1,
  title: "Sleeveless Tee",
  price: 23.95,
  category: "Shirts",
};
// key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
  console.log(`${key}: ${value}`); // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

// Swap variables trick

let student = "James",
  teacher = "Andrew";
[student, teacher] = [teacher, student];
console.log(student); // Andrew
console.log(teacher); // James

// --------------------------------------------------------------------------------------------------------------------- //

/* The array rest …
Usually, if the array is longer than the list at the left, the “extra” items are omitted. If we’d like to capture them, we can add a
parameter that gets ‘the rest’ using three dots … */

const [jcFirst, jcLast, ...jcTitles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(jcTitles); // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jcTitles.length); // 4

// We can also provide a default value for any extra variable without a match on the right:

const [jcFirst, jcLast, ...jcTitles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the",
  "Roman",
  "Republic",
];
console.log(jcTitles); // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log(jcTitles.length); // 4

// --------------------------------------------------------------------------------------------------------------------- //

/* Object destructuring
Objects can be destructured similarly to arrays - we just use curly brackets instead of square brackets. There are some other
differences as well:
An existing object, at the right side can be split into variables. The left side contains an object-like “pattern” for
corresponding properties based on name:
*/

// property names (keys) on right are matched to variable names on left
let { width, height, title } = {
  title: "My Component",
  height: 100,
  width: 200,
};
console.log(width, height, title); // 200 100 My Component

// Assign default value to missing property (same as arrays)

let { width = 200, height = 100, title } = { title: "My Component" };
console.log(width, height, title); // 200 100 My Component

/* Smart function parameters

There are times when a function has many parameters, most of which are optional. We can pass parameters as an object,
and the function immediately destructures them into variables. */

function displayComponent({ height = 200, width = 100, title }) {
  console.log(
    `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`,
  );
}
displayComponent({ width: 200, title: "My Awesome Component" });
displayComponent({ title: "My Amazing Component" });
displayComponent({ width: 300, height: 300, title: "My Average Component" });

/* The rest pattern … .
We can use the … rest pattern when destructuring objects in the same way that we can use it for arrays, to unpack remaining
properties into a new object. */

let options = { width: 200, height: 100, title: "My Component" };
let { title, ...rest } = options;
console.log(title); // My Component
console.log(rest); // { width: 200, height: 100 }

// --------------------------------------------------------------------------------------------------------------------- //

/* Internally all dates in JavaScript are converted to and stored as a number, which is the total milliseconds (1/1000th of a
second) since the epoch time: Jan 1st 1970 UTC+0. 

Creation
Without arguments, the Date constructor creates a new Date for the current time: */

const now = new Date();
console.log(now); // 2023-03-26T11:45:59.096Z
console.log(+now); // 1679832116638 - number of milliseconds since epoch

/* With a single argument new Date(milliseconds), it creates a Date object with the time equal to the number of milliseconds
after the epoch: */

const epoch = new Date(0); // 0 milliseconds since Jan 1 1970
const jan2_1970 = new Date(1000 * 60 * 60 * 24); // a full day in milliseconds after Jan 1
console.log(epoch); // 1970-01-01T00:00:00.000Z
console.log(jan2_1970); // 1970-01-02T00:00:00.000Z

/* new Date(datestring) parses a string into a Date object, which is the same as Date.parse. Strings should be yyyy-mm-dd.

Strings including a time assume a local timezone, whereas strings without a time assume a UTC timezone (Z).

To specify a timezone, add +hh:mm after the time to provide the difference between UTC and the desired timezone. */

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas); // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
const nyeUTC = new Date("2023-12-31 23:59:59+00:00"); // specific timezone specified (UTC)
console.log(nyeLocal); // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
console.log(nyeUTC); // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone

/* new Date(year, month, day, hours, minutes, seconds, ms) creates the date with the given
components in the local time zone. Only the first two are mandatory.

The year must have 4 digits: 2013 is okay, 98 is not.

The month count starts with 0 (Jan), up to 11 (Dec).

The day parameter is actually the day of month. If absent then 1 is assumed.

If hours/minutes/seconds/ms are absent, they are assumed to be equal to 0. */

const boxingDay = new Date(2023, 11, 26); // month 11 is December, assumes local timezone
console.log(boxingDay); // 2023-12-25T14:00:00.000Z - so hours are different in UTC
const remembranceDay = new Date(2023, 10, 11, 11, 11); // month 10 is November, assumes local timezone
console.log(remembranceDay); // 2023-11-11T01:11:00.000Z - so hours are different in UTC

/* Displaying Dates
Since all JavaScript dates are stored internally as UTC time, we often need to convert to a local timezone when displaying
them.

The toLocaleString() method returns a string with a locale and language-sensitive representation of this date including the
time. toLocaleDateString() and toLocaleTimeString() display just the date and time portions of the date respectively */

const christmas = new Date("2023-12-25"); // assumes UTC timezone if time not included
console.log(christmas.toLocaleDateString()); // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
console.log(christmas.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
// 2023. 12. 25. 오전 9:00:00 - both timezone and language are converted to Korean
const nyeLocal = new Date("2023-12-31 23:59:59"); // assumes local timezone if time is included
console.log(nyeLocal.toLocaleString()); // 31/12/2023, 11:59:59 pm - default to local TZ


