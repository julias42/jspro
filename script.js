"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json`;

class GoodsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this._getGoods()
      .then(data => {
        this.goods = data.contents;
        this.render();
        this.goodsPrices();
      });
  }
  _getGoods() {
    return fetch(`${API}`)
      .then(result => result.json())
      .catch(error => {
        alert(error);
      });
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
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
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `
  <div class="products__product">
    <img class="products__product_img" src="image/product_image.jpg" alt="photo">
    <h1 class="products__product_name">${this.product_name}</h1>
    <h4 class="products__product_price">${this.price} руб</h4>
    <button class="products__product_but">Добавить</button>
  </div>`
  };
}
/*class GoodsDropdown {
  constructor(container = '.header__basket')
}
*/
const list = new GoodsList();

/***
 * Архитектура классов корзины
 */
class Basket {
  addProduct() { } // добавление продуктов в корзину
  removeProduct() { } //удаление продуктов из корзины
}
class Product {
  renderProduct() { } // отображение продуктов в корзине 
  productCount() { } // подсчёт кол-ва продуктов в корзине
  productPrice() { } // подсчёт общей суммы покупок в корзине
}