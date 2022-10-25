Vue.component('cart', {
  props: ['basket', 'show', 'visible'],
  template: `
    <section v-show="show" class="header__dropdown">
    <h3 v-show="visible" class="header__dropdown_empty">Корзина пуста</h3>
          <cart_item v-for="item of basket" 
          :cart_item="item">
          </cart_item>
    </section>`
});

Vue.component('cart_item', {
  props: ['cart_item'],
  template: `
    <div class="header__dropdown_products">
      <div class="header__dropdown_product">
        <h4>{{cart_item.id_product}}</h4>
        <h4>{{cart_item.product_name}}</h4>
        <p>{{cart_item.price}} руб</p>
        <p>Кол-во {{cart_item.quantity}} шт</p>
        <button @click="$root.removeProduct(cart_item)" class=" header__dropdown_remove-but">Удалить</button>
      </div>
        <div class="header__dropdown_total">Сумма покупок в корзине:<span class="header__dropdown_number">{{cart_item.quantity * cart_item.price}}</span>
          руб
        </div>
        
    </div>`
});