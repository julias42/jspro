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
    this.$parent.getJson(`${this.catalogUrl}`)
      .then(data => {
        for (let item of data) {
          this.$data.filtered.push(item);
        }
      });
  },

  template: `<div class="circle_cart">{{getCount()}}</div>`
}