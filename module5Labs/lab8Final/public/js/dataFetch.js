let categories = new Map();
let allProducts;
let currentProducts = [];

// Fetch from our own Express backend instead of fakestoreapi directly
fetch("http://localhost:3000/products")
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
  // Fill in the card with product data
  template.querySelector(".card-header").innerText = item.title;
  template.querySelector(".card-title").innerText = item.category;
  template.querySelector(".card-subtitle").innerText = "$" + item.price;
  template.querySelector(".card-img-top").src = item.image;
  template.querySelector(".card-img-top").alt = item.title;
  template.querySelector(".card-text").innerText =
    item.description.substring(0, 100) + "...";
  // Add a CSS class to the card based on the category slug
  template.querySelector(".card").classList.add(slug);
  // Give the card a unique id using the product id
  template.querySelector(".card").id = item.id;
  // Add a click event to the button so it expands the full description
  template.querySelector(".btn").addEventListener("click", (e) => {
    expandText(e, item.id, item.description);
  });
  // Append the finished card to #product-list
  document.querySelector("#product-list").appendChild(template);
}

function getCategoryIcon(cat) {
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
  const filter = document.getElementById("category_filter");
  categories.forEach((slug, category) => {
    const option = document.createElement("option");
    option.textContent = getCategoryIcon(category) + " " + category;
    option.value = category;
    filter.appendChild(option);
  });
}

function filterProducts(e) {
  if (e.target.value === "All Products") {
    currentProducts = allProducts;
    loadProducts(allProducts);
  } else {
    const filtered = allProducts.filter((product) => {
      return product.category === e.target.value;
    });
    currentProducts = filtered;
    loadProducts(filtered);
  }
}

function sortProducts(e) {
  let copied = [...currentProducts];
  switch (e.target.value) {
    case "price_lohi":
      copied.sort((x, y) => x.price - y.price);
      loadProducts(copied);
      break;
    case "price_hilo":
      copied.sort((x, y) => y.price - x.price);
      loadProducts(copied);
      break;
    case "title_az":
      copied.sort((x, y) => x.title.localeCompare(y.title));
      loadProducts(copied);
      break;
    case "title_za":
      copied.sort((x, y) => y.title.localeCompare(x.title));
      loadProducts(copied);
      break;
    case "id":
      loadProducts(currentProducts);
      break;
  }
}

function searchProducts() {
  const search = document.getElementById("searchText").value.toLowerCase();
  let searchFilter = allProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });
  loadProducts(searchFilter);
}

function expandText(e, productId, fullDescription) {
  const card = document.getElementById(productId);
  e.preventDefault();
  card.querySelector(".card-text").innerText = fullDescription;
}
