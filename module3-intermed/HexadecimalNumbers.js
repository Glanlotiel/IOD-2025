/* Hexadecimal numbers use base 16 (0-9 and A-F) instead of our standard base 10 (0-9) for decimals. They are
widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there
exists a shorter way to write them: 0x and then the hexadecimal number. */

const r = 0xff;
const g = 0xff;
const b = 0xff;

const white = `rbg( ${r}, ${g}, ${b})`;

console.log(white); // rbg(255,255,255)
