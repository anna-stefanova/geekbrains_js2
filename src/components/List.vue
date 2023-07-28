<template>
  <div>
    <div :class="[$style.goods]">
      <Item
          v-for="id in getItemsOnPage"
          :key="id"
          :id="id"
      ></Item>
    </div>
    <Button @mySuperEvent="fetchMore">Подгрузить еще товары</Button>
  </div>

</template>

<script>
import Item from "./Item.vue";
import Button from "./Button.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
name: "List",
  components: {
    Item,
    Button
  },
  data() {
    return {
      items: [],
      page: 1
    }
  },
  methods: {
    ...mapActions('goods', [
        'requestData'
    ]),
    fetchMore () {
      this.requestData(this.page)
          .then(() => {
            this.page++;
          });
    },
  },
  computed: {
    ...mapGetters('goods', [
      "getItemsOnPage",
    ])
  },
  mounted() {
    this.fetchMore();
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