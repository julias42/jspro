const cart_dropdown_item = {
props:['cart_dropdown_item'],
template: `
  <div>
    <div class="basketRow basketHeader">
        <div>Название товара{{cart_dropdown_item.product_name}}</div>
        <div>Количество{{cart_dropdown_item.quantity}}</div>
        <div>Цена за шт.{{cart_dropdown_item.price}}</div>
        <div>Итого</div>
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
      show:false

    }
  },

  mounted() {

    this.$parent.getJson(`api/cart`)
      .then(data => {
        for (let el of data.contents) {
          this.basket.push(el);
        }
      });
  },
template:`
<div @mouseenter="!show" v-show="!show" class="basket">
<cart_dropdown_item v-for="item of basket"
:cart_dropdown_item="item">
</cart_dropdown_item>
</div>`
  
}