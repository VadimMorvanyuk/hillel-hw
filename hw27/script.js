// // Написати функцію generateList(array),
// яка приймає масив із чисел та масивів чисел (наприклад [1,2,3])
//  і генерує список з елементів:
const generateList = (array) => {
  const main = document.querySelector(".main");
  const ul = document.createElement("ul");
  array.forEach((item) => {
    const li = document.createElement("li");
    if (typeof item === "number") {
      li.textContent = item;
    } else if (typeof item === 'object') {
      generateList(item);
    }
    ul.appendChild(li);
  });

  main.appendChild(ul);
};

generateList([1, 2, 3, [4, 5]]);


