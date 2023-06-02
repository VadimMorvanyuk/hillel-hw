let users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    name: "Peter Deli",
    password: "7&ZSFcY3SLh@6uA6",
    age: 25,
    email: "peter-abcd@gmail.com",
    phone: "380680156093",
    cardNumber: "4312 3259 9203 5291",
  },
  {
    id: 2,
    name: "Robin Collins",
    password: "CollinscY3SLh@6uA6",
    age: 23,
    email: "robin.collins@example.com",
    phone: "380980712092",
    cardNumber: "3259 9203 1522 5621",
  },
  {
    id: 3,
    name: "Steven Powell",
    password: "7b445hSFcYsdadaww",
    age: 29,
    email: "steven.powell@example.com",
    phone: "380930583982",
    cardNumber: "5291 3227 7433 1255",
  },
  {
    id: 4,
    name: "Annie Wright",
    password: "2geh2ad2ada@6uA6",
    age: 32,
    email: "annie.wright@example.com",
    phone: "380995829593",
    cardNumber: "3409 2358 1248 1598",
  },
  {
    id: 5,
    name: "Joshua Lawson",
    password: "2awfawg4h3h",
    age: 41,
    email: "joshua.lawson@example.com",
    phone: "380939294959",
    cardNumber: "3896 6232 5936 1295",
  },
];

const viewInfo = (event) => {
  let id = event.target.parentElement.dataset.id;
  let parent = event.target.parentElement;

  let userProperties = Object.entries(users[id - 1]);

  if (!parent.textContent.includes("password")) {
    userProperties.forEach((user) => {
      let prop = document.createElement("p");
      prop.textContent = `${user[0]}: ${user[1]}`;
      parent.append(prop);
    });
  } else {
    parent.textContent = users[id - 1].name;
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    const view = document.createElement("button");

    edit.textContent = "Edit";
    remove.textContent = "Remove";
    view.textContent = "View";

    edit.classList.add("edit");
    remove.classList.add("remove");
    view.classList.add("view");

    parent.append(edit, remove, view);

    showUsers();
  }
};

const removeUser = (event) => {
  let id = parseInt(event.target.parentElement.dataset.id);
  let warning = document.createElement("p");
  let yes = document.createElement("button");
  let no = document.createElement("button");
  yes.textContent = "Yes";
  no.textContent = "No";
  warning.textContent = "Are you sure?";
  warning.append(yes, no);
  event.target.parentElement.append(warning);

  yes.addEventListener("click", () => {
    users = users.filter((f) => f.id !== +id);
    users.forEach((user, index) => {
      user.id = index + 1;
    });
    localStorage.setItem("users", JSON.stringify(users));
    users.length > 0 ? showUsers() : message();
  });
  no.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
};

const message = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "There aren't any users";
};

const createForm = () => {
  const form = document.createElement("form");
  const btn = document.createElement("button");
  btn.textContent = "Add new User";
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    const inputs = [
      ...event.target.parentElement.getElementsByTagName("input"),
    ];
    let isValid = true;
    const user = {};

    inputs.forEach((input) => {
      const propertyName = input.placeholder.toLowerCase().replace(" ", "");

      const pattern = input.getAttribute("pattern");
      const value = input.value;

      if (pattern && !new RegExp(pattern).test(value)) {
        isValid = false;
        input.classList.add("invalid");
      } else {
        user[propertyName] = value;
        input.classList.remove("invalid");
      }
    });

    if (isValid) {
      users.unshift(user);
      users.forEach((user, index) => {
        user.id = index + 1;
      });
      showUsers();
    }
  });

  const properties = [
    {
      type: "text",
      placeholder: "Name",
      pattern: "[A-Z][a-z]{1,} [A-Z][a-z]{1,}",
    },
    { type: "password", placeholder: "Password", pattern: "[A-Za-z0-9]{6,}" },
    { type: "number", placeholder: "Age", pattern: "[0-9]{1,}" },
    {
      type: "email",
      placeholder: "Email",
      pattern: "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
    },
    { type: "tel", placeholder: "Phone", pattern: "380[0-9]{9}" },
    {
      type: "text",
      placeholder: "Card number",
      pattern: "[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}",
    },
  ];

  const inputs = [];

  for (let input of properties) {
    inputs.push(input);
  }

  inputs.forEach((item) => {
    const input = document.createElement("input");
    input.type = item.type;
    input.placeholder = item.placeholder;
    input.setAttribute("pattern", item.pattern);

    form.appendChild(input);
  });
  form.append(btn);

  const parent = event.target.parentElement;
  parent.append(form);
};

const addUser = () => {
  const newUser = document.createElement("div");
  const addBtn = document.createElement("button");
  const container = document.querySelector(".container");

  addBtn.textContent = "Add";

  newUser.classList.add("newUser");
  addBtn.classList.add("add");

  newUser.appendChild(addBtn);
  container.appendChild(newUser);

  addBtn.addEventListener("click", () => {
    newUser.children.length === 1
      ? createForm()
      : newUser.childNodes[1].remove();
  });
};

const editUser = (event) => {
  const form = document.createElement("form");
  form.classList.add("form");
  const parent = event.target.parentElement;
  const id = +parent.dataset.id;
  const currentUser = users[id - 1];

  delete currentUser.id;
  const props = Object.values(currentUser);
  const btnSave = document.createElement("button");
  const newProps = Object.entries(currentUser);
  btnSave.textContent = "Save changes";
  const user = {};

  const patterns = [
    { pattern: "[A-Z][a-z]{1,} [A-Z][a-z]{1,}" },
    { pattern: "[A-Za-z0-9]{6,}" },
    { pattern: "[0-9]{1,}" },
    { pattern: "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+" },
    { pattern: "380[0-9]{9}" },
    { pattern: "[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" },
  ];

  newProps.forEach((prop) => {
    user[prop[0]] = prop[1];
  });
  btnSave.addEventListener("click", (event) => {
    event.preventDefault();

    users[id - 1] = user;
    user.id = id;

    const arr = [];
    const classesInputs = [...form.children];
    classesInputs.forEach((input) => {
      arr.push(input.className);
    });
    if (arr.includes("invalid")) {
      alert("Wrong input's value");
    } else {
      localStorage.setItem("users", JSON.stringify(users));
      showUsers();
    }
  });
  if (parent.children.length === 3) {
    props.forEach((item, index) => {
      const input = document.createElement("input");

      input.value = item;

      input.addEventListener("input", (event) => {
        const propName = newProps[index][0];

        const propValue = event.target.value;
        user[propName] = propValue;
        user.id = id;
        const checkPattern = new RegExp(event.target.pattern).test(
          event.target.value
        );
        checkPattern == false
          ? event.target.classList.add("invalid")
          : event.target.classList.remove("invalid");
      });
      form.append(input);
      const inputID = input.form.length;
      input.id = inputID;
      input.pattern = patterns[inputID - 1].pattern;
    });
    form.append(btnSave);
    parent.append(form);
  } else {
    parent.children[3].remove();
  }
};

const showUsers = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  addUser();

  users.forEach((user) => {
    const p = document.createElement("p");
    p.classList.add("user");
    p.textContent = `${user.name}`;
    p.setAttribute("data-id", user.id);

    const edit = document.createElement("button");
    const remove = document.createElement("button");
    const view = document.createElement("button");

    view.addEventListener("click", viewInfo);
    remove.addEventListener("click", removeUser);
    edit.addEventListener("click", editUser);

    edit.classList.add("edit");
    remove.classList.add("remove");
    view.classList.add("view");

    container.appendChild(p);
    p.append(edit, remove, view);
  });

  localStorage.setItem("users", JSON.stringify(users));

  let res = document.getElementsByTagName("button");
  let arr = [...res];
  arr.forEach((item) => {
    item.textContent =
      item.className[0].toUpperCase() + item.className.slice(1);
  });
};
showUsers();
