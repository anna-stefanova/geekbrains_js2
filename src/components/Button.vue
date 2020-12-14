<template>
  <button :class="[$style.btnBuy]" @click="onBtnClicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
name: "Button",
  methods: {
    onBtnClicked () {
      this.$emit('mySuperEvent');
    }
  }
}
</script>

<style module lang="css">
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
</style>