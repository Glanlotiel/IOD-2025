/* A string in JavaScript must be surrounded by quotes. There are three types of quotes, all
of which are fundamentally the same. */

// useful when the string contains an apostrophe
const doubleQuotes = "String that can include 'single quotes.'";

//useful when the string contains double quotes
const singleQuotes = 'String that can include "double quotes."';

// useful when embedding expressions/variables
const backTicks = `String that can include variables ${singleQuotes}`;
