// Try creating a json object variable for a book. The book should have a title, description, author and number of pages

// ❖ Try printing these object property values in your console individually and via the whole book object
// ❖ Update the description of the book

// ❖ Extension: Create an array of 5 book objects

let book = {
  title: "Tales of Duviri",
  description:
    "It recounts details of the hamlets that dot Duviri's surface, as well as the ruler 'Dominus Thrax', and his five royal courtiers.",
  author_name: "Euleria Entrati",
  page_count: 312,
};

console.log(book.title);
console.log(book.description);
console.log(book.author_name);
console.log(book.page_count);

console.log(book);

book.description =
  "It recounts details of the hamlets that dot its surface, as well as the ruler Dominus Thrax, and his five royal courtiers: happy Mathila, angry Lodun, jealous Bombastine, sad Luscinia, and fearful Sythel.";
