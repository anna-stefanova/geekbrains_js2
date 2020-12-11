<template>
  <div :class="[$style.modal_cart]">
    <div :class="[$style.modal_body_cart]">
      <div :class="[$style.modal_content_cart]">
        <div :class="[$style.headerCart]">
          <p :class="[$style.close]">x</p>
          <h2>Корзина</h2>
        </div>
        <div :class="[$style.contentCart]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Cart"
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
      opacity: 0;
      visibility: hidden;
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

    .cart__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

    }

    .cart__item__description {
      display: flex;
      flex-direction: row;
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

    .cart__item {
      margin: 10px 45px 10px 45px;
    }

    .amountGood {
      height: 20px;
    }

    .minus, .plus, .delete {

      margin-top: 1px;
      background-color: #9D1813;
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
      height: 25px;
      width: 25px;
      outline: none;
      box-sizing: border-box;
      border-top: 1px solid #99a8bf;
      border-left: 1px dotted #99a8bf;
      border-bottom: 1px solid #99a8bf;
      cursor: pointer;
    }

    .cart__item__price {
      margin-top: 5px;
    }
</style>