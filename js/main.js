"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: `db/catalogData.json`,
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