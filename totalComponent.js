const cart_total = {
  data(){
    return {
      filtered:[]
    }
  },
  methods:{

    getTotal() {
      let total = 0;
      this.filtered.map((item) => {
        total += (item.quantity * item.price);
      });
      return total;
    },

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