/* Textual data is stored as strings. The internal format for strings is always the UTF-16 character encoding system, which uses 16
bit values. */

/* A backslash precedes a special character in an ‘escape sequence’. We can create multiline strings by using a newline
character, written as \n , which denotes a line break. Use \t for a tab space: */

const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`;
console.log(guestList);
// Guests:
// - John
// - Pete
// - Mary

/*
\r Carriage return: \r\n to represent a line break in windows
\’,\” Use a single or double quote inside a single/double quoted string
\\ backslash
\xXX Unicode character with the given hexadecimal Unicode XX. e.g. \x7A is the same as z.
\uXXXX A Unicode symbol with the hex code XXXX in UTF-16 encoding. e.g. \u00A9 is a Unicode
for the copyright symbol ©. It must be exactly 4 hex digits.
\u{X…XXXXXX} (1 to 6 hex characters) A Unicode symbol with the given UTF-32 encoding. Some rare characters are encoded
with two Unicode symbols, taking 4 bytes. This way we can insert long codes, e.g.
\u{1F60D} is a smiling face symbol 
*/

// --------------------------------------------------------------------------------------------------------------------- //

/*                                            Comparing Strings

All strings are encoded using UTF-16. That means each character has a corresponding numeric code. When two strings are
compared using < or >, under the hood, JavaScript converts each character into a numeric code and compares them
mathematically. 

str.codePointAt(pos) returns the numeric code for the char at position pos. */

console.log("Z".codePointAt(0)); // 90

// String.fromCodePoint(code) creates a character by its numeric code.

console.log(String.fromCodePoint(90)); // Z

// --------------------------------------------------------------------------------------------------------------------- //

/*                                          Manipulating Strings

JS has a wide variety of built-in functions for manipulating strings. Some of the most-used operations are to check their
length, to concatenate them using +, checking for the existence or location of substrings with the indexOf() method, changing
case, or extracting substrings with the substring() method. */

const string = "I could be anything you like";
console.log(string.length); // 28 - string is 28 characters long
console.log(string.indexOf("anything")); // 11 - starting at 0 for 'I'
console.log(string.substring(20)); // 'you like' - substring starting at position 20
console.log(string.toUpperCase()); // I COULD BE ANYTHING YOU LIKE
console.log(string + " plus more"); // I could be anything you like plus more

// --------------------------------------------------------------------------------------------------------------------- //

/*                                            Manipulating Strings (more)

Other useful string functions include startsWith() and endsWith(), split(), slice(), replace() and replaceAll() and trim(). */

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.startsWith("The")); // true - case sensitive
console.log(sentence.endsWith("dog")); // false - needs the full stop
console.log(sentence.split(" ")); // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)); // quick - gets the section between chars 4 and 10
console.log(sentence.replace("quick", "slow")); // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()); // extra spaces - trims whitespace from start and end
