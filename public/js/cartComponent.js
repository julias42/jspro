const cart_item = {
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
  <div class="cart_close_btn" @click=$parent.removeProduct(cart_item)></div>
</div> `
};

const cart = {
  components: { cart_item },
  data() {
    return {
      catalogUrl: `/db/catalogData.json`,
      basket: [],
      filtered: [],
      visible: false
    }
  },

  methods: {

    removeProduct(item) {
      this.$parent.getJson(`/api/cart`)
        .then(data => {
          if (data.result === 1) {
            if (item.quantity > 1) {
              item.quantity--;
            } else {
              this.filtered.splice(this.filtered.indexOf(item), 1);
            } if (this.filtered.length === 0) {
              this.visible = true;
            }
          }
        });
    },
  },


  mounted() {
    this.$parent.getJson(`/api/cart`)
      .then(data => {
        for (let item of data) {
          this.$data.basket.push(item);
          this.$data.filtered.push(item);
        }
      });
  },

  template: `
    <section class="cart_card">
      <div class="cart_none" v-show="visible">
      <h3 class="cart_none_text">Your basket is empty</h3>
    </div>
          <cart_item v-for="item of filtered" 
          :cart_item="item">
          </cart_item>
    </section>`
};