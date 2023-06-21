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
// small burger with cheese stuffing
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// add mayo
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// how many calories in a burger?
console.log("Calories: " + hamburger.calculate());

// how much does it cost?
console.log("Price: " + hamburger.calculatePrice());

// I decided to add one more topping(sauce)
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// After some actions, I want to know the price
console.log("Price with sauce: " + hamburger.calculatePrice());

// Calories: 45
// Price: 80
// Price with sauce: 95
