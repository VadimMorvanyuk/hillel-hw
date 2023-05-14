let orders = [];

function showCategories() {
  const container = document.querySelector(".categories");
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const el = document.createElement("div");
    el.innerHTML = data[i].name;
    el.setAttribute("data-category", i);
    el.addEventListener("click", showProductsHandler);
    container.appendChild(el);
  }
  const orders = document.createElement("button");

  orders.addEventListener("click", showOrders);
  orders.innerHTML = "My orders";
  container.appendChild(orders);
}
function showOrders() {
  const cancel = document.createElement("button");
  const order = localStorage.getItem("myOrders");
  let myOrders = document.createElement("div");
  let categories = document.querySelector(".categories");
  cancel.classList.add("cancel");
  cancel.innerHTML = "Cancel";
  categories.innerHTML = "";
  myOrders.classList.add("myOrders");
  orders = JSON.parse(order);
  if (orders === null) {
    myOrders.innerHTML = "There aren't any orders yet";
  } else {
    orders.forEach((item) => {
      const order = document.createElement("p");
      const deleteBtn = document.createElement("button");
      const orderInfo = document.createElement("p");
      let isVisible = false;
      orderInfo.innerHTML = `${item.name} ${item.amount} ${item.price} ${item.date}`;
      deleteBtn.setAttribute("data-id", item.id);
      deleteBtn.classList.add("delete");
      deleteBtn.innerHTML = "X";
      order.setAttribute("data-id", item.id);
      order.style.cursor = "pointer";
      order.innerHTML = `${item.date} ${item.price}`;
      order.appendChild(deleteBtn);
      myOrders.appendChild(order);
      order.addEventListener("click", () => {
        if (isVisible == false) {
          order.innerText = `${item.name} ${item.amount} ${item.price} ${item.date}`;
          order.appendChild(deleteBtn);
          isVisible = true;
        } else {
          order.innerText = `${item.date} ${item.price}`;
          order.appendChild(deleteBtn);
          isVisible = false;
        }
      });
    });
  }

  categories.appendChild(myOrders);

  categories.appendChild(cancel);
  cancel.addEventListener("click", showCategories);
  deleteOrders();
}

function deleteOrders() {
  const btns = document.querySelectorAll(".delete");

  btns.forEach((item) => {
    item.addEventListener("click", (event) => {
      const id = event.target.dataset.id;

      orders = orders.filter((f) => f.id !== +id);
      localStorage.setItem("myOrders", JSON.stringify(orders));
      showOrders();

      if (orders.length == 0) {
        localStorage.removeItem("myOrders");
        let categories = document.querySelector(".categories");
        let myOrders = document.querySelector(".myOrders");
        let cancel = document.querySelector(".cancel");

        myOrders.innerHTML = "There aren't any orders yet";
        categories.appendChild(myOrders);
        categories.appendChild(cancel);
      }
    });
  });
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
  productPrice.classList.add("price");
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
  const price = document.querySelector(".price").textContent;
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
    if (orders == null) {
      orders = [];
    }
    let itemID = orders.length + 1;
    orders.push({
      id: itemID,
      name: product,
      amount: amountOfProduct,
      price: price,
      date: `${new Date()}`,
      address: address,
    });
    localStorage.setItem("myOrders", JSON.stringify(orders));

    products.innerHTML = "";
    details.innerHTML = "";
    form.style.display = "none";
  }
}
showCategories();
