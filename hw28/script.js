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
  productName.classList.add("product-item");
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

function buyProduct(event) {
  const form = document.forms.formOrder;
  form.style.display = "block";

  const button = document.getElementById("btn");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    checkYourOrder();
  });

  form.appendChild(button);
  let body = document.querySelector("body");
}

function checkYourOrder() {
  const form = document.forms.formOrder;
  const amountOfProduct = form.amount.value;
  const address = form.address.value;
  const products = document.querySelector(".products");
  const details = document.querySelector(".details");
  const product = document.querySelector(".product-item").textContent;
  const childrens = [...form.children];

  const lengthOfItems = [];
  childrens.forEach((item) => {
    lengthOfItems.push(item.value.length);
  });
  lengthOfItems.pop();
  if (lengthOfItems.includes(0)) {
    alert("Fill in all the information about your order!");
  } else {
    alert(
      `You have bought ${amountOfProduct} ${product} \n Your address: ${address}`
    );
    products.innerHTML = "";
    details.innerHTML = "";
    form.style.display = "none";
  }
}
showCategories();
