Vue.component(cart, {
    props: ['cart', 'show'],
    template: `
    <section v-show="show" class="header__dropdown">
    <cart_item class="header__dropdown_products" 
    v-for="item of cart" :cart_item="item">
    </cart_item>
    </section>`
});

Vue.component(cart_item, {
    props: ['cart_item'],
    template: `
    <div class="header__dropdown_product">
      <h4>{{cart_item.id_product}}</h4>
      <h4>{{cart_item.product_name}}</h4>
      <p>{{cart_item.price}} руб</p>
      <p>Кол-во {{cart_item.quantity}} шт</p>
      <button @click="$root.removeProduct(cart_item)" class=" header__dropdown_remove-but">Удалить</button>
    </div>`
});