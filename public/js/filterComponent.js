const filter_box = {
  data() {
    return {
      userSearch: '',
      filtered: [],
      products: []
    }
  },
  methods:{
    filter(value) {
    const regexp = new RegExp(value, 'i');
    this.filtered = this.products.filter(product => regexp
      .test(product.product_name));
  }},

  template: `
    <form action="#" class="header_search" @submit.prevent="filter(userSearch)">
    <input class="search" type="text" placeholder="Store search" v-model="userSearch">
    <button class="search_submit" type="submit"></button>
  </form>`
};