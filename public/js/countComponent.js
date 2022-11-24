const cart_count = {
  data() {
    return {
      catalogUrl: `/db/catalogData.json`,
      basket: []
    }
  },

  methods: {
    getCount() {
      return Object.values(this.basket)
        .reduce((acc, product) => acc + product.quantity, 0);
    },
  },

  mounted() {

    this.$parent.getJson(`api/cart`)
      .then(data => {
        for (let el of data.contents) {
          this.basket.push(el);
        }
      });
  },

  template: `<div class="circle_cart">{{getCount()}}</div>
            <div class="circle_cart_mobile_heading">{{getCount()}}</div>`
}