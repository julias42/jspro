"use strict"

const butEl = document.querySelector('.header__basket');
const productsEl = document.querySelector('.products');
  
const products =[
  {title: "mouse", price:150},
  {title: "mat", price:50},
  {title: "book", price:1050},
  {title: "mouses", price:250},
];

const renderProductsItem = (title,price)=>{
  return `
  <div class="products__product">
    <img src="image/product_mouse.jpg" alt="photo">
    <h1 class="products__product_name">${title}</h1>
    <p class="products__product_price">${price} у.е</p>
    <button class="products__product_but">Добавить</button>
  </div>`
};

const renderProductsList = (list)=>{
  let productList = list.map(item=>renderProductsItem(item.title, item.price))
  .join("");
  productsEl.innerHTML = productList;
}
 renderProductsList(products);



