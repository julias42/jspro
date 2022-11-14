"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app_cart = new Vue({
  el: '#app_cart',
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

new Vue({
  el: '#app_index',
  components: { sale_center, cart_count, product },
});