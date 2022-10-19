"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
  el: '#app',
  data: {
    products: [],
  },

  methods: {
    getProducts(url) {
      return fetch(url)
        .then(result => result.json)
        .catch(error => {
          console.log(error)
        });
    },
  },

  mounted() {
    this.getProducts(`${API}/getBasket.json`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
  },

})




/*const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;
const cartProducts = document.querySelector('.products');
const totalNumber = document.querySelector('.header__dropdown_number');
const butEl = document.querySelector('.header__but');
const dropDownEl = document.querySelector('.header__dropdown');
const dropDownProducts = document.querySelector('.header__dropdown_products');
const addProductBut = document.querySelector('.products__product_but');
const removeBut = document.querySelectorAll('.header__dropdown_remove-but');

class GoodsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.getGoods()
      .then(data => {
        this.goods = data.contents;
        this.render();
      });
  }

  getGoods() {
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
    cartProducts.innerHTML = listHtml;
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
  </div>`;
  }
}

const list = new GoodsList();

/***
 * Архитектура классов корзины 
 */

/*class Basket extends GoodsList {
  constructor(container = '.header__dropdown_products') {
    super(container);
    this._dropdownMenu();
    this._getBasket()
      .then(() => {
        this.renderProduct();
        this.productPrice();
      });
  }

  _getBasket() {
    return super.getGoods();
  }

  _dropdownMenu() {
    butEl.addEventListener('click', () => {
      dropDownEl.classList.toggle('hidden');
    });
  }

  renderProduct() {
    let productHtml = '';
    this.goods.forEach(product => {
      const productItem = new Product
        (product.product_name, product.price, product.id_product, product.quantity);
      productHtml += productItem.renderProduct();
    })
    dropDownProducts.innerHTML = productHtml;
  }

  productPrice() {
    const total = this.goods.reduce((a, b) => a + b.price, 0);
    totalNumber.innerHTML = total;
  } // подсчёт общей суммы покупок в корзине


  addProduct() { }// добавление продуктов в корзину 
  removeProduct() { }//удаление продуктов из корзины
  productCount() { } // подсчёт кол-ва продуктов в корзине
}

class Product {
  constructor(id_product, product_name, price, quantity) {
    this.product_name = product_name;
    this.price = price;
    this.id_product = id_product;
    this.quantity = quantity;
  }

  renderProduct() {
    return `
  <div class="header__dropdown_product">
    <h4>${this.id_product}</h4>
    <h4>${this.product_name}</h4>
    <p>${this.price} руб</p>
    <p>Кол-во ${this.quantity} шт</p>
    <button class="header__dropdown_remove-but">Удалить</button>
  </div>`;
  }// отображение продуктов в корзине 

}
new Basket();

//код к заданию для  4 урока 

const textRegExp = document.querySelector('.text');
document.querySelector('.text__but').addEventListener('click', () => {
  textRegExp.classList.toggle('hidden');
});

document.querySelector('.text__but_regexp').addEventListener('click', () => {
  textRegExp.textContent.replace(/'/g, '"');
  console.log(textRegExp.textContent.replace(/'/g, '"'));
});
*/