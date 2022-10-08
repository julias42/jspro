"use strict"

class Hamburgers {
  constructor(size, stuffing, topping) {
    this.size = size;
    this.stufffing = stuffing;
    this.topping = topping;
    this.hambs = [];
  }
  addToping(topping) {

  }
  removeTopping(topping) {

  }
  getToppings(topping) {
    this.topping = [
      { name: "seasoning", price: 15, ccal: 0 },
      { name: "mayonnaise", price: 20, ccal: 5 },
    ]
  }
  getSize() {
    this.size = [
      { size: "big", price: 100, ccal: 40 },
      { size: "small", price: 50, ccal: 20 }
    ];
  }
  getStuffing() {
    this.stuff = [
      { name: "cheese", price: 10, ccal: 20 },
      { name: "salad", price: 20, ccal: 5 },
      { name: "potatoes", price: 15, ccal: 10 },
    ];
  }
  calculatePrice() {

  }
  calculateCalories() {

  }
}