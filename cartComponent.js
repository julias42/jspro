Vue.component('cart', {
  props: ['products', 'visible'],
  template: `
    <section class="cart_card">
      <div class="cart_none" v-show="visible">
      <h3 class="cart_none_text">Ваша корзина пуста</h3>
    </div>
          <cart_item v-for="item of products" 
          :cart_item="item">
          </cart_item>
    </section>`
});

Vue.component('cart_item', {
  props: ['cart_item'],
  template: `
  <div class="cart">
  <img :src="cart_item.img" alt="photo">
  <div class="cart_text">
    <a class="mango" href="product.html">{{cart_item.product_name}}</a>
    <ul>
      <li>Price: <span class="price">{{cart_item.price}} $</span></li>
      <li>Color:{{cart_item.Color}}</li>
      <li>Size: {{cart_item.Size}}</li>
      <li>Quantity: <input class="quantity" <span>{{cart_item.quantity}}</span></li>
    </ul>
  </div>
  <div class="cart_close_btn" @click=$root.removeProduct(cart_item)></div>
</div> `
});