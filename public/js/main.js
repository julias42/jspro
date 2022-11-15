"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const appCart = new Vue({
  el: '#appCart',
  data: {
    catalogUrl: `/db/catalogData.json`,
    basket: [],
    show: false,
    error: false,
    visible: false
  },

  components: { cart, filter_box, cart_count, cart_total },

  methods: {
    getProducts(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
  },
});

const appIndex = new Vue({
  el: '#appIndex',
  data(){
    return{
      products:[],
      catalogUrl:"/db/products.json"
    }
  },
  components: { sale_center, cart_count, products },

  methods: {
    getProducts(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
  },
});