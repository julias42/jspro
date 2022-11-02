  const filter_box = {
    data(){
      return{
        userSearch: '',
      }
    }, 

    methods:{
      filter() {
        const regexp = new RegExp(this.userSearch, 'i');
        this.filtered = this.products.filter(product => regexp
          .test(product.product_name));
      },
    },
    template:`
    <form action="#" class="header_search" @submit.prevent="filter">
    <input class="search" type="text" placeholder="Store search" v-model="$root.userSearch">
    <button class="search_submit" type="submit"></button>
  </form>`
  };