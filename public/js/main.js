"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const appCart = new Vue({
  el: '#appCart',
  data: {
    catalogUrl: '/db/catalogData.json',
    basket: [],
    show: false,
    error: false,
    visible: false
  },

  components: { cart, filter_box, cart_count, cart_total },

  methods: {

    filter(values) {
      const regexp = new RegExp(values, 'i');
      this.filtered = this.basket.filter(product => regexp
        .test(product.product_name));
    },

    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error)
        })
    },

    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },

    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    
    delJson(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
  }
});

const appIndex = new Vue({
  el: '#appIndex',
  data() {
    return {
      basket:[],
      filtered:[],
      products: [],
      catalogUrl: '/db/products.json'
    }
  },

  components: { sale_center, cart_count, products, filter_box },

  methods: {

    filter(values) {
      const regexp = new RegExp(values, 'i');
      this.filtered = this.basket.filter(product => regexp
        .test(product.product_name));
    },

    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },

    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },

    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
  }
});

const appReg = new Vue({
  el: '#appReg',
  data() {
    return {
      products: [],
      catalogUrl: '/db/products.json'
    }
  },

  components: { cart, sale_center, cart_count, products, filter_box },

  methods:{
    getJson(url) {
    return fetch(url)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      })
  },}
})