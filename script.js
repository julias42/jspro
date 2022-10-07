"use strict"

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchgoods() {
    this.goods = [
      { id:1, title: "Mouse", price: 150 },
      { id:1, title: "Mat", price: 50 },
      { id:1, title: "Book", price: 1050 },
      { id:1, title: "Gamepads", price: 250 },
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
  goodsPrices() {
    const total = this.goods.reduce((a, b) => a + b.price, 0);
    document.querySelector('.header__total_number').innerHTML = total;
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
    <h4 class="products__product_price">${this.price} руб</h4>
    <button class="products__product_but">Добавить</button>
  </div>`
  };
}

const list = new GoodsList();
list.fetchgoods();
list.render();
list.goodsPrices();

/***
 * Архитектура классов корзины
 */
class Basket{
  addProduct(){} // добавление продуктов в корзину
  removeProduct(){} //удаление продуктов из корзины
}
class Product{
  renderProduct(){} // отображение продуктов в корзине 
  productCount(){} // подсчёт кол-ва продуктов в корзине
  productPrice(){} // подсчёт общей суммы покупок в корзине
}