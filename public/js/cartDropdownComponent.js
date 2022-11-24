const cart_dropdown = {
  data() {
    return {
      catalogUrl: `/db/catalogData.json`,
      basket: []
    }
  },

  methods: {
 
  },

  mounted() {

    this.$parent.getJson(`api/cart`)
      .then(data => {
        for (let el of data.contents) {
          this.basket.push(el);
        }
      });
  },

  template: `<div class="basket">
  <div class="basketRow basketHeader">
      <div>Название товара</div>
      <div>Количество</div>
      <div>Цена за шт.</div>
      <div>Итого</div>
  </div>
  <div class="basketTotal">
      Товаров в корзине на сумму:
      $<span class="basketTotalValue">0</span>
  </div>
</div>`
}