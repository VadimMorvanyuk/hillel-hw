const row = document.querySelector(".row");
const table = document.createElement("table");

for (let i = 1; i <= 100; i++) {
  let td = document.createElement("td");
  td.textContent = i;
  td.classList.add("row-item");
  table.appendChild(td);
  if ((i - 1) % 10 == 0) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
  }
  table.appendChild(td);
}
row.appendChild(table);
