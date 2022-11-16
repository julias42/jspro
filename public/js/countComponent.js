const cart_count = {
  data() {
    return {
      catalogUrl: `/db/catalogData.json`,
      filtered: [],
    }
  },

  methods: {
    getCount() {
      return Object.values(this.filtered)
        .reduce((acc, product) => acc + product.quantity, 0);
    },
  },

  mounted() {

    this.$parent.getJson(`api/cart`)
      .then(data => {
        for (let el of data) {
          this.$data.filtered.push(el);
        }
      });
  },

  template: `<div class="circle_cart">{{getCount()}}</div>`
}