  Vue.component('filter-box',{
    template:`
    <form action="#" class="header_search" @submit.prevent="$root.filter">
    <input class="search" type="text" placeholder="Поиск по магазину" v-model="$root.userSearch">
    <button class="search_submit" type="submit"></button>
  </form>`
  });