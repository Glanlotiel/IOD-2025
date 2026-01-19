// We can also customize how an object behaves like a number by defining a valueOf method.

const apple = {
  name: "Apple",
  category: "Granny Smith",
  price: 1.2,
  valueOf() {
    // without this special function, we can’t multiply the object below
    return this.price;
  },
};

console.log(apple * 2); //2.4
