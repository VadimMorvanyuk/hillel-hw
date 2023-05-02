let slider = document.querySelector(".slider");
let items = document.querySelectorAll(".item");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let index = 1;
let counterItems = document.createElement("div");

counterItems.textContent = `${index} / 5`;
counterItems.classList.add("counter");
slider.appendChild(counterItems);
btnPrev.style.display = "none";

function showItem() {
  items.forEach((item, i) => {
    if (i + 1 === index) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
showItem();

btnPrev.addEventListener("click", () => {
  showItem(index--);
  counterItems.textContent = `${index} / 5`;
  console.log(index, items.length);
  index === 1
    ? (btnPrev.style.display = "none")
    : (btnNext.style.display = "block");
});

btnNext.addEventListener("click", () => {
  showItem(index++);
  counterItems.textContent = `${index} / 5`;
  console.log(index, items.length);
  index === items.length
    ? (btnNext.style.display = "none")
    : (btnPrev.style.display = "block");
});
