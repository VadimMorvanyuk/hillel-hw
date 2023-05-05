function showCategories() {
  const container = document.querySelector(".categories");

  for (let i = 0; i < data.length; i++) {
    const el = document.createElement("div");
    el.innerHTML = data[i].name;
    el.setAttribute("data-category", i);
    el.addEventListener("click", showProductsHandler);
    container.appendChild(el);
  }
}
function showProductsHandler(event) {
  const container = document.querySelector(".products");
  container.innerHTML = "";
  const el = event.target;
  const categoryIndex = el.getAttribute("data-category");
  const categoryProducts = data[categoryIndex].products;

  for (let i = 0; i < categoryProducts.length; i++) {
    const el = document.createElement("div");
    el.innerHTML = categoryProducts[i].name;
    el.setAttribute("data-product", categoryIndex);
    el.setAttribute("data-category", i);
    el.addEventListener("click", showDetails);
    container.appendChild(el);
  }
}

function showDetails(event) {
  const el = event.target;
  const container = document.querySelector(".details");
  const categoryIndex = el.getAttribute("data-product");
  const productIndex = el.getAttribute("data-category");
  const productDetails = data[categoryIndex].products[productIndex];
  const productName = document.createElement("div");
  const productDescription = document.createElement("div");
  const productPrice = document.createElement("div");
  const button = document.createElement("button");

  button.innerHTML = "Buy product!";
  productName.innerHTML = productDetails.name;
  productDescription.innerHTML = productDetails.description;
  productPrice.innerHTML = productDetails.price;
  container.innerHTML = "";

  button.addEventListener("click", buyProduct);
  container.append(productName, productDescription, productPrice, button);
}

function buyProduct() {
  alert("You have bought one product!");
  const products = document.querySelector(".products");
  const details = document.querySelector(".details");
  products.innerHTML = "";
  details.innerHTML = "";
}
showCategories();
