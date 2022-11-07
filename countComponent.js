const cart_count = {
  data(){
    return {
      products:[]
    }
  },

  methods:{
    getCount() {
      return Object.values(this.products)
        .reduce((acc, product) => acc + product.quantity, 0);
    },
  },

  template:`<div class="circle_cart">{{getCount()}}</div>`
}