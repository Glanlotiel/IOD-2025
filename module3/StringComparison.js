
/* String comparison

The algorithm to compare two strings is simple:
1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second.
We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater. */


console.log('apple' < 'banana'); // true - because a is less than b (rule 2)
console.log('eat' < 'eaten'); // true - because all characters are the same but eaten is longer (rule 5)