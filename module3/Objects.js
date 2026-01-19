/* Objects are typically used to represent an entity and store all related data, eg. for a customer, a product, an order, etc. Curly
brackets are used to indicate where the object begins and ends. Inside, a series of key (property name) and value pairs are
separated by commas, with colons separating the key and value. */

const tv = { //object starts here
brand: "Sony Bravia" , // key-value pair. brand is the key, "Sony Bravia" is the value
size: "55-Inch" , // values can be any data type
model: 2023, // multiple key-value pairs are separated by commas
resolution: "4K" // the comma on the last key-value pair can be omitted
} //object ends here. It's all stored within the tv variable.

console.log(tv)

