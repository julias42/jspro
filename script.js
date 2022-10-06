"use strict"

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchgoods() {
    this.goods = [
      { title: "Mouse", price: 150 },
      { title: "Mat", price: 50 },
      { title: "Book", price: 1050 },
      { title: "Gamepads", price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.products').innerHTML = listHtml;
  }
}

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
  <div class="products__product">
    <img src="image/product_mouse.jpg" alt="photo">
    <h1 class="products__product_name">${this.title}</h1>
    <h4 class="products__product_price">${this.price} у.е</h4>
    <button class="products__product_but">Добавить</button>
  </div>`
  };
}

const list = new GoodsList();
list.fetchgoods();
list.render();


