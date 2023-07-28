<template>
  <div>
    <header>
      <div :class="[$style.container]">
        <div :class="[$style.logo]">
          <a href="index.html" :class="[$style.logo__item]">Brand</a>
        </div>
        <nav>
          <ul>
            <li><a href="#">Регистрация</a></li>
            <li><a href="#" @click="onCartClick">Корзина</a></li>
            <Cart
            v-if="getStatusCart"></Cart>
          </ul>
        </nav>
      </div>
    </header>

    <main :class="[$style.main_content]">
      <div :class="[$style.container]">
        <List></List>
      </div>
    </main>

    <Form />
    <footer>
      <div :class="[$style.container]">
        Footer
      </div>
    </footer>


  </div>
</template>


<script>
import List from "./components/List.vue";
import Cart from "./components/Cart.vue";
import Form from "./components/Form.vue";

import { mapGetters, mapActions } from 'vuex';

export default {
  name: "App",

  components: {
    Cart,
    List,
    Form
  },

  methods: {
    ...mapActions('goods', [
       'changeStatusCart',
    ]),

    onCartClick () {
      this.changeStatusCart();
    }
  },
  computed: {
    ...mapGetters('goods', [
        'getStatusCart'
    ]),
  },

}
</script>

<style module lang="css">

/* Main Page*/
  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }
  body {
    margin: 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
  }

  body>.main_content {
    flex-grow: 1;
  }
  header, footer {
    flex: 0 0 auto;
    height: 100px;
    background-color: #13989D;
  }

  .container {
    max-width: 1240px;
    margin: 0 auto;
  }
  header>.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    padding-top: 15px;
  }

  header>.container>nav li {
    display: inline-block;
    margin: 0 20px;
  }

  li>a {
    text-decoration: none;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  }

  .logo {
    margin-top: 10px;
    margin-left: 20px;
  }

  .logo__item {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-decoration: none;
    font-size: 50px;
    color: white;
    opacity: 1;
  }


</style>