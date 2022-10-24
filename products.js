Vue.component('products',{
  props:['products'],
  template:` <div class="products__product"> 
  <products v-for="product in products" 
  :product="products"
  :product="products"></products>
     </div>`
});

Vue.component('product',{
  props:['product'],
  template:` 
  <img class="products__product_img" src="image/product_image.jpg" alt="photo">
  <h1 class="products__product_name">{{product.product_name}}</h1>
  <h4 class="products__product_price">{{product.price}} руб</h4>
  <button @click="$parent.$emit('addProduct, product')" class="products__product_but">Добавить</button>`
});