"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

class GoodsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this._getGoods()
      .then(data => {
        this.goods = data.contents;
        this.render();
        this.goodsPrices();
        this.dropdownMenu();
        this.renderProduct();
      });
  }

  _getGoods() {
    return fetch(`${API}/getBasket.json`)
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

  dropdownMenu(){
  const butEl = document.querySelector('.header__but');
  const dropDownEl = document.querySelector('.header__dropdown')
  butEl.addEventListener('click',()=>{
    dropDownEl.classList.toggle('hidden');
  })}

  renderProduct(){
   let productHtml = '';
    this.goods.forEach(product=>{
      const productItem = new GoodsItemDropdown
      (product.product_name, product.price, product.id_product, product.quantity);
      productHtml += productItem.renderProduct();
    })
    document.querySelector('.header__dropdown').innerHTML = productHtml;
  }
  addProductDropdown(){
    document.querySelector('.')
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

class GoodsItemDropdown {
  constructor(product_name, price, id_product, quantity){ 
    this.product_name = product_name;
    this.price = price;
    this.id_product = id_product;
    this.quantity = quantity;
  }

  renderProduct() { 
    return`
    <div class="header__dropdown_product">
      <h4>${this.id_product}<h4>
      <h4>${this.product_name}</h4>
      <p>${this.price} руб</p>
      <p>Кол-во ${this.quantity} шт</p>
      <button class="header__dropdown_but">Удалить</button>
    </div>`
  };
}
const list = new GoodsList();
  
/***
 * Архитектура классов корзины
 */
class Basket {
  addProduct() {}// добавление продуктов в корзину 
  removeProduct() {}//удаление продуктов из корзины
}

class Product {
 renderProduct() { }// отображение продуктов в корзине 
  productCount() { } // подсчёт кол-ва продуктов в корзине
  productPrice() { } // подсчёт общей суммы покупок в корзине
}