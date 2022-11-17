const filter_box = {
  data() {
    return {
      userSearch: '',
    }
  },

  template: `
    <form action="#" class="header_search" @submit.prevent="$parent.filter(userSearch)">
    <input class="search" type="text" placeholder="Store search" v-model="userSearch">
    <button class="search_submit" type="submit"></button>
  </form>`
};