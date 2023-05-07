const main = document.querySelector(".main");

document.getElementById("btn").addEventListener("click", () => {
  const table = document.createElement("table");

  const firstName = document.forms.userForm.firstName;
  const surName = document.forms.userForm.surName;
  const date = document.forms.userForm.date;
  const gender = document.forms.userForm.gender;
  const city = document.forms.userForm.city;
  const address = document.forms.userForm.address;
  const languages = document.forms.userForm.languages;

  let results = [firstName, surName, date, city, address].map((item) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = `${item.name} ${item.value}`;
    tr.append(td);
    table.append(tr);
  });
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = `${gender[i].name}: ${gender[i].value}`;
      tr.append(td);
      table.append(tr);
    }
  }

  for (let i = 0; i < languages.length; i++) {
    if (languages[i].checked) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = languages[i].value;
      tr.append(td);
      table.append(tr);
    }
  }
  main.append(table);

  const form = document.forms.userForm.style.display = "none";
});
