<template>
  <div :class="[$style.goods__item]">
    <img src="img/no-image.jpg" alt="">
    <div :class="[$style.description]">
      <h3 :class="[$style.title]"> {{ currentItem.name }}</h3>
      <p :class="[$style.price]">{{ currentItem.price }}</p>
    </div>
    <Button @mySuperEvent="onBuyClick">Купить</Button>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
name: "Item",
  components: {Button},
  props: {
    id: String,
  },
  computed: {
    ...mapGetters('goods', [
        "getData",
        "getTotalInCart"
    ]),
    currentItem() {
      return this.getData[this.id] || {}
    }
  },
  methods: {
    ...mapActions('goods', [
        "addInCart",
        "calcResult"
    ]),
    onBuyClick() {
      this.addInCart(this.id);
      this.calcResult();
    }
  }
}
</script>

<style module lang="css">
.goods__item {
  width: 23%;
  margin: 20px;
}
.goods__item img {
  width: 100%;
  height: 280px;
}
.goods__item h3:hover {
  color: #13989D;
  cursor: pointer;
}

.description {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}

.price {
  margin-top: 5px;
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
  color: #ff0000;
}

.btnBuy {
  cursor: pointer;
  background: #9D1813;
  color: #ffffff;
  padding: 0.8em 1.1em;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.9em;
  font-weight: 700;
}

.btnBuy:hover {
  border: #ffffff solid 1px;
  box-sizing: border-box;
}

.title {
  margin-top: 10px;
}

</style>