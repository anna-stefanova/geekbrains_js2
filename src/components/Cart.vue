<template>
  <div :class="[$style.modal_cart]">
    <div :class="[$style.modal_body_cart]">
      <div :class="[$style.modal_content_cart]">
        <div :class="[$style.headerCart]">
          <p :class="[$style.close]" @click="onCloseClick">x</p>
          <h2>Корзина</h2>
        </div>

          <CartItem
              v-for="id in getItemsInCart"
              :key="id"
              :id="id"
              :count="getData[id].count"
              v-if="getData[id].count > 0"
          />



        <div :class="[$style.resultAmount]">
          <p>Итого</p><p :class="[$style.res]">{{ getTotalInCart }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Cart",

  props: {
    id: String,
    count: Number,

  },

  components: {
    CartItem,
  },

  computed: {
    ...mapGetters('goods', [
      'getData',
      'getItemsInCart',
        'getTotalInCart'

    ]),

  },
  methods: {
    ...mapActions('goods', [
      'changeStatusCart',
        'minusCount'
    ]),
    onCloseClick () {
      this.changeStatusCart();
    },

  }

}
</script>

<style module lang="css">
  /* Cart - modal window*/

    .modal_cart {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      left: 0;
      top: 0;
      opacity: 1;
      transition: all 0.8s ease 0s;
    }
    .modal_cart.open {
      opacity: 1;
      visibility: visible;
    }


    .modal_body_cart {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 10px;
    }

    .modal_content_cart {
      min-width: 375px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #edeff2;

    }

    .headerCart h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 35px;
      width: 250px;
      margin: 0 auto;
      text-align: center;
      color: #13989D;
    }

    .close {
      text-align: end;
      margin-top: 10px;
      margin-right: 15px;
      font-weight: 700;
      font-size: 20px;
      cursor: pointer;
    }

  .resultAmount {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 45px 45px;
    border-top: 1px solid black;
  }

  .resultAmount p {
    margin-top: 10px;
  }
</style>