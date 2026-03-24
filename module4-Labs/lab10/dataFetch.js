let categories = new Map();
let allProducts;
let currentProducts = [];
// STEP 1:
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    allProducts = json;
    currentProducts = allProducts;
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
  template.querySelector(".btn").addEventListener("click", (e) => {
    expandText(e, item.id, item.description);
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
  // Get the category filter dropdown
  const filter = document.getElementById("category_filter");
  // Loop through the categories Map
  categories.forEach((slug, category) => {
    // Add one <option> for each category
    const option = document.createElement("option");
    option.textContent = getCategoryIcon(category) + " " + category;
    option.value = category;
    filter.appendChild(option);
  });
}
function filterProducts(e) {
  // Get the selected category from the dropdown
  // If "All Products" is selected, show everything
  if (e.target.value === "All Products") {
    currentProducts = allProducts;
    loadProducts(allProducts);
  } else {
    // Filter allProducts so only matching products remain
    const filtered = allProducts.filter((product) => {
      return product.category === e.target.value;
    });
    currentProducts = filtered;
    loadProducts(filtered);
  }
  // Reload the products on screen
}
function sortProducts(e) {
  // Get the selected sort option
  // Make a copy of allProducts before sorting
  let copied = [...currentProducts];
  switch (e.target.value) {
    case "price_lohi":
      copied.sort((x, y) => {
        return x.price - y.price;
      });
      loadProducts(copied);
      break;

    case "price_hilo":
      copied.sort((x, y) => {
        return y.price - x.price;
      });
      loadProducts(copied);
      break;

    case "title_az":
      copied.sort((x, y) => {
        return x.title.localeCompare(y.title);
      });
      loadProducts(copied);
      break;

    case "title_za":
      copied.sort((x, y) => {
        return y.title.localeCompare(x.title);
      });
      loadProducts(copied);
      break;

    case "id":
      loadProducts(currentProducts);
      break;
  }
  // Reload the sorted products
}
function searchProducts() {
  // Get the text from the search input
  // Convert it to lowercase
  const search = document.getElementById("searchText").value.toLowerCase();
  // Filter allProducts by checking whether the search text appears in:
  // - title
  // - description
  // - category
  let searchFilter = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });
  loadProducts(searchFilter);
  // Reload only the matching products
}

function expandText(e, productId, fullDescription) {
  // Find the correct card by id
  const card = document.getElementById(productId);
  // Prevent the link/button from jumping the page
  e.preventDefault();
  // Replace the shortened description with the full description
  card.querySelector(".card-text").innerText = fullDescription;
}
