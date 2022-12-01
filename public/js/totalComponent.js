const cart_total = {
  data() {
    return {
      catalogUrl: `/db/catalogData.json`,
      basket: []
    }
  },
  methods: {

    getTotal() {
      let total = 0;
      this.basket.map((item) => {
        total += (item.quantity * item.price);
      });
      return total;
    },

  },

  mounted() {
    this.$parent.getJson(`/api/cart`)
      .then(data => {
        for (let el of data.contents) {
          this.basket.push(el);
        }
      });
  },

  template:
    `<div class="total_heading">
  <div class="sub_total">
    <h3>SUB TOTAL<span>{{getTotal()}}$</span></h3>
  </div>
  <div class="grand_total">
    <h2>GRAND TOTAL<span>{{getTotal()}}$</span></h2>
  </div>
</div>`
}