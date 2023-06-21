class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_LETTUCE = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };
  static TOTAL = {};

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    Hamburger.TOTAL = {
      price: this.size.price + stuffing.price,
      calories: this.size.calories + stuffing.calories,
    };
  }
  addTopping(topping) {
    Hamburger.TOTAL.price += topping.price;
    Hamburger.TOTAL.calories += topping.calories;
  }
  calculate() {
    return Hamburger.TOTAL.calories;
  }
  calculatePrice() {
    return Hamburger.TOTAL.price;
  }
}
// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());

// Calories: 45
// Price: 80
// Price with sauce: 95
