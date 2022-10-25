  Vue.component('filter-box',{
    template:`
    <form action="#" class="header__search" @submit.prevent="$root.filter">
    <input class="header__find" type="text" placeholder="Поиск по магазину" v-model="$root.userSearch">
    <button class="header__find_button" type="submit"></button>
  </form>`
  });