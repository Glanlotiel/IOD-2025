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
  // Clear out the current product list before reloading
  document.getElementById("product-list").innerText = "";
  // Loop through each product
  products.forEach((product) => {
    // Create a category slug version of the category name
    let slug = product.category.split("'").join("").split(" ").join("-");
    // Store category info in the Map
    categories.set(product.category, slug);
    // Call a function that creates and displays one product card
    addProduct(product, slug);
  });

  // If no products exist, show a "No matching products" message
  if (products.length === 0) {
    document.getElementById("product-list").innerText = "No matching products.";
  }
}

function addProduct(item, slug) {
  // Clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
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
  // Add a CSS class to the card based on the category slug
  template.querySelector(".card").classList.add(slug);
  //  unique id using the product id
  template.querySelector(".card").id = item.id;
  // click event to the button so it expands the full description
  template.querySelector(".btn").addEventListener("click", () => {
    template.querySelector(".card-text").innerText = item.description;
  });
  // Append the finished card to #product-list
  document.querySelector("#product-list").appendChild(template);
}

function getCategoryIcon(cat) {
  // Return a different icon depending on the category
  switch (cat.toLowerCase()) {
    case "men's clothing":
      return "👔";
    case "women's clothing":
      return "👗";
    case "jewelery":
      return "💍";
    case "electronics":
      return "💻";
    default:
      return "🛍️";
  }
}
function loadFilterOptions() {
  // STEP 15:
  // Get the category filter dropdown
  const filter = document.getElementById("category_filter");
  // STEP 16:
  // Loop through the categories Map
  categories.forEach((slug, category) => {
    
  });
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
