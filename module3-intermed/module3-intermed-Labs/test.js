/* The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:

a) Print the total number of minutes that have passed so far today

b) Print the total number of seconds that have passed so far today

c) Calculate and print your age as: 'I am x years, y months and z days old'

d) Write a function daysInBetween(date1, date2) which calculates and returns the
amount of days in between the two given dates. */

const today = new Date();
const Birthday = new Date("2001-5-27")

const minutesToday = (today.getHours() * 60 + today.getMinutes())
const secondsToday = (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds())
// console.log("Current time is " + today.toLocaleTimeString());
// console.log(today.getHours() + " hours have passed so far today");
// console.log(minutesToday + " minutes have passed to far today")
// console.log(secondsToday + " seconds have passed so far today.")

let myAgeYear = today.getFullYear() - Birthday.getFullYear()
let myAgeMonth = (today.getMonth() - Birthday.getMonth())
let myAge = (today.getDate() - Birthday.getDate())

// If days is negative, borrow from months
if (myAge < 0) {
    myAgeMonth--;
    // Get the number of days in the previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    myAge += prevMonth.getDate();
    }

// If months is negative, borrow from years
if (myAgeMonth < 0) {
    myAgeYear--;
    myAgeMonth += 12;
}

// console.log(`I am ${myAgeYear} years, ${myAgeMonth} months and ${myAge} days old`)


function daysInbetween(date1, date2) {
let combTime = date1.getTime() - date2.getTime() ;
  if (combTime < 0 ) {
    //code
  }
}

console.log(daysInbetween(today, Birthday))