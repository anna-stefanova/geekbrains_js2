<template>

  <div :class="[$style.cart__item]">
    <h3 :class="[$style.cart__item__title]">{{ currentItem.name }}</h3>
    <div :class="[$style.cart__item__price]">{{ currentItem.price }}</div>
    <div :class="[$style.amount]">
      <input :class="[$style.amountGood]"  size="3" v-model="currentValue">
      <Button :class="[$style.minus]" @mySuperEvent="onMinusClick">-</Button>
      <Button :class="[$style.plus]" @mySuperEvent="onPlusClick">+</Button>
      <Button :class="[$style.delete]" @mySuperEvent="onDeleteClick">x</Button>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "CartItem",
  components: {
    Button
  },


  props: {
    id: String,
    count: Number,

  },

  data () {
    return {
      currentValue: this.count,
    }
  },

  computed: {
    ...mapGetters('goods', [
        "getData",
        "getItemsInCart",
        "getTotalInCart"
    ]),
    currentItem() {
      return this.getData[this.id] || {}
    },
  },
  methods: {
    ...mapActions('goods', [
       "minusCount",
        "deleteCount",
        "plusCount",
        "calcResult"
    ]),
    onMinusClick () {
      if (this.currentValue > 0) {
        this.minusCount(this.id);
        this.currentValue = this.getData[this.id].count;
        this.calcResult();
      }
      if (this.currentValue === 0) {
        this.deleteCount(this.id);
        this.currentValue = this.getData[this.id].count;
        this.calcResult();
      }
    },
    onPlusClick () {
      this.plusCount(this.id);
      this.currentValue = this.getData[this.id].count;
      this.calcResult();
    },
    onDeleteClick () {
      this.deleteCount(this.id);
      this.currentValue = this.getData[this.id].count;
      this.calcResult();
    }
  }
}
</script>

<style module lang="css">
.cart__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 45px 10px 45px;
}

.amount {

}

.amountGood {
  height: 22px;
}

.minus, .plus, .delete {
  margin-left: -5px;
  margin-top: -2px;
  background-color: #9D1813;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  height: 27px;
  width: 25px;
  outline: none;
  box-sizing: border-box;
  border-top: 1px solid #99a8bf;
  border-left: 1px dotted #99a8bf;
  border-bottom: 1px solid #99a8bf;
  cursor: pointer;
  padding: 0;
  border-radius: unset;
}

.cart__item__price {
  margin-top: 5px;
}

</style>