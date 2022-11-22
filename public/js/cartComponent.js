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
    if(item.quantity > 1){
      this.$parent.getJson(`/api/cart/${item.id}`,{quantity: -1})
        .then(data => {
          if (data.result) {
              item.quantity--;
          }
        })
           } else {
              this.$parent.delJson(`/api/cart/${item.id}`, item)
                .then(data=>{
                  if (data.result){
                    this.basket.splice(this.basket.indexOf(item), 1);
                  }if (this.basket.length === 0){
                    this.visible = true;
                  }else  {
                    console.log('error');
                  }
                })
              }
              console.log(this.basket)
          }
    },

  mounted() {
    this.$parent.getJson(`/api/cart`)
      .then(data => {
        for (let el of data.contents) {
          this.basket.push(el);
          this.filtered.push(el);
        }
      });
  },

  template: `
    <section class="cart_card">
      <div class="cart_none" v-show="visible">
      <h3 class="cart_none_text">Your basket is empty</h3>
    </div>
          <cart_item v-for="item of basket" 
          :cart_item="item">
          </cart_item>
    </section>`
};