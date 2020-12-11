<template>
  <div :class="[$style.goods]">
    <Item
        v-for="(good, index) in items"
        :key="index"
        :name="good.name"
        :price="good.price"
        :id="good.id"
    ></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
name: "List",
  components: {Item},
  data() {
    return {
      items: [
        {id: '1', name: 'good1', price: 1},
        {id: '2', name: 'good2', price: 2},
        {id: '3', name: 'good3', price: 3},
        {id: '4', name: 'good4', price: 4},
        {id: '5', name: 'good5', price: 5},
      ]
    }
  }
}
</script>

<style module lang="css">
.goods {
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
}
</style>