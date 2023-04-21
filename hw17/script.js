function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return `${name}, ${age}`;
  };
}

function Car(brand, model, year, price, owner) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.price = price;
  if (owner.age >= 18) {
    this.owner = owner;
  } else {
    console.log("You aren't 18!");
  }
  this.getInfo = function () {
    return `${this.brand}, ${this.model}, ${this.year}, ${this.price}, ${this.owner.getInfo()}`;
  };
}

const p1 = new Person("Name1", 19);
const p2 = new Person("Name2", 25);
const p3 = new Person("Name3", 26);
const car1 = new Car("Tesla", "Model X", 2017, 50000, p1);
const car2 = new Car("Tesla", "Model S", 2014, 29000, p2);
const car3 = new Car("Mercedes", "G63", 2020, 80000, p3);
console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car3.getInfo());
