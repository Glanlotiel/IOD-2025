let categories = new Map();
let allProducts;

// STEP 1:
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    allProducts = json;
    loadProducts(allProducts);
    loadFilterOptions();
  });

function loadProducts(products) {
  // STEP 2:
  // Clear out the current product list before reloading
  document.getElementById("product-list").innerText = "";
  // STEP 3:
  // Loop through each product
  products.forEach((product) => {
    // STEP 4:
    // Create a category slug version of the category name
    // Example:
    // "men's clothing" -> something CSS-friendly
    // Hint:
    // replace spaces
    // remove apostrophes
    card.classList.add(slug) 
    // STEP 5:
    // Store category info in the Map
    // STEP 6:
    // Call a function that creates and displays one product card
  });
  // STEP 7:
  // If no products exist, show a "No matching products" message
}

function addProduct(item) {
  // STEP 8:
  // Clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // STEP 9:
  // Fill in the card with product data:
  // - title
  template.querySelector(".card-header").innerText = item.title;
  // - category/header
  template.querySelector(".card-title").innerText = item.category;
  // - price
  template.querySelector(".card-subtitle").innerText = item.price;
  // - image src
  template.querySelector(".card-img-top").src = item.image;
  // - image alt
  template.querySelector(".card-img-top").alt = item.title;
  // - shortened description
  template.querySelector(".card-text").innerText =
    item.description.substring(0, 100) + "...";
  // STEP 10:
  // Add a CSS class to the card based on the category slug
  template.querySelector(".card").classList.add(item.category);
  // STEP 11:
  // Give the card a unique id using the product id
  template.querySelector(".card").id = item.id;
  // STEP 12:
  // Add a click event to the button so it expands the full description
  template.querySelector(".btn").addEventListener("click", () => {
    template.querySelector(".card-text").innerText = item.description;
  });
  // STEP 13:
  // Append the finished card to #product-list
  document.querySelector("#product-list").appendChild(template);
}

function getCategoryIcon(cat) {
  // STEP 14:
  // Return a different icon depending on the category
  //
  // Hint:
  // use switch(cat.toLowerCase())
  //
  // Categories include:
  // - men's clothing
  // - women's clothing
  // - jewelery
  // - electronics
  //
  // Add a default fallback too
}
function loadFilterOptions() {
  // STEP 15:
  // Get the category filter dropdown
  // STEP 16:
  // Loop through the categories Map
  // STEP 17:
  // Add one <option> for each category
}
function filterProducts(e) {
  // STEP 18:
  // Get the selected category from the dropdown
  // STEP 19:
  // Filter allProducts so only matching products remain
  // STEP 20:
  // Special case:
  // If "All Products" is selected, show everything
  // STEP 21:
  // Reload the products on screen
}
function sortProducts(e) {
  // STEP 22:
  // Get the selected sort option
  // STEP 23:
  // Make a copy of allProducts before sorting
  //
  // Hint:
  // Don't sort the original directly if you want to preserve it
  // STEP 24:
  // Use a switch statement to sort by:
  // - price low to high
  // - price high to low
  // - title A-Z
  // - title Z-A
  // STEP 25:
  // Reload the sorted products
}
function searchProducts() {
  // STEP 26:
  // Get the text from the search input
  // Convert it to lowercase
  // STEP 27:
  // Filter allProducts by checking whether the search text appears in:
  // - title
  // - description
  // - category
  // STEP 28:
  // Reload only the matching products
}
function expandText(e, productId, fullDescription) {
  // STEP 29:
  // Prevent the link/button from jumping the page
  // STEP 30:
  // Find the correct card by id
  // STEP 31:
  // Replace the shortened description with the full description
}
