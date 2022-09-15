"use strict"
  
const products =[
  {title: "mouse", price:150},
  {title: "mat", price:50},
  {title: "book", price:1050},
  {title: "mouses", price:250},
];

const renderProductsItem = (title,price)=>{
  return `<div class="products__product">
  <img src="image/product_mouse.jpg" alt="photo">
  <h1 class="products__product_name">${title}</h1>
  <p>${price}</p>
</div>`
};

const renderProductsList = (list)=>{
  let productList = list.map(item=>renderProductsItem(item.title, item.price))
  .join("");
  document.querySelector('.header__basket')
  .addEventListener('click',(event)=>{
    event.target.innerHTML = productList;
  });
}
renderProductsList(products);