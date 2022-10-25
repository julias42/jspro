Vue.component('products', {
  props: ['products'],
  template: `
  <div class="products"> 
      <product v-for="item of products" 
      :product="item">
      </product>
  </div> `
});

Vue.component('product', {
  props: ['product'],
  template: `
  <div class="products__product">
    <img class="products__product_img" src="image/product_image.jpg" alt="photo">
    <h1 class="products__product_name">{{product.product_name}}</h1>
    <h4 class="products__product_price">{{product.price}} руб</h4>
    <button class="products__product_but" @click="$parent.$emit('add-product', product)">Добавить</button>
   </div>`
});