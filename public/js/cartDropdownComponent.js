const cart_dropdown_item = {
props:['cart_dropdown_item'],
template: `
  <div>
    <div class="basketRow basketHeader">
        <div><h4 class="basketHead">Название товара</h4>{{cart_dropdown_item.product_name}}</div>
        <div><h4 class="basketHead">Количество</h4>{{cart_dropdown_item.quantity}}</div>
        <div><h4 class="basketHead">Цена за шт.</h4>{{cart_dropdown_item.price}}</div>
        <div><h4 class="basketHead">Итого</h4>{{cart_dropdown_item.quantity * cart_dropdown_item.price}}$</div>
    </div>
      <div class="basketTotal">
         Товаров в корзине на сумму:
          $<span class="basketTotalValue">{{cart_dropdown_item.quantity * cart_dropdown_item.price}}</span>
      </div>
  </div>`
}


const cart_dropdown = {
  components:{ cart_dropdown_item },
  data() {
    return {
      catalogUrl: `/db/catalogData.json`,
      basket: [],
      show: false,
      visible: true


    }
  },

  mounted() {

    this.$parent.getJson(`api/cart`)
      .then(data => {
        for (let el of data.contents) {
          this.basket.push(el)
        }if (this.basket.length != 0) {
          this.visible = false;
        }
      });
  },
template:`
<div>
<a class="header_link_cart" @mouseover="show = !show" @mouseleave="show = !show" href="/cart.html"><img src="/img/cart.svg" alt="cart"></a>
<div  v-show="show" class="basket">
<div v-show="visible" class="cart_noneDropdown_text"><h4>Basket is empty</h4></div>
<cart_dropdown_item v-for="item of basket"
:cart_dropdown_item="item">
</cart_dropdown_item>
</div>
</div>` 
};