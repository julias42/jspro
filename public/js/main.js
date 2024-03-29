"use strict"

const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
  el: '#app',
  data: {
    error: false,
    visible: false
  },

  components: {
    cart,
    cart_count,
    cart_count_mobile,
    cart_total,
    filter_box,
    scroll,
    cart_count,
    products,
    filter_box,
    cart_dropdown,
    cart_count_mobile_dropdown
  },

  methods: {

    handleScroll(evt,el){
      if(window.pageYOffset >  350){
          el.setAttribute(
              'style',
              'opacity: 1; transform: translateY(0%)'
          )
      }
      return window.pageYOffset > 400
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
    }
  }
});