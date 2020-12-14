<template>
  <div v-bind:class="[closeClass, openClass]">
    <div :class="[$style.modal_body_cart]">
      <div :class="[$style.modal_content_cart]">
        <div :class="[$style.headerCart]">
          <p :class="[$style.close]">x</p>
          <h2>Регистрация</h2>
          <form :class="[$style.form]" action="#">
            <input v-bind:type="text" v-bind:name="name" placeholder="Имя">
            <input v-bind:type="tel" v-bind:name="phone" placeholder="Телефон">
            <input v-bind:type="email" v-bind:name="email" placeholder="Email">
            <input v-bind:type="submit">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "RegForm",
  data: {
    closeClass: 'modal_cart',
    openClass: 'open'
  }
}

</script>

<style module lang="css">
/*Modal Window*/
.modal_cart {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  opacity: 1;
  visibility: visible;
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

/*Registration*/
    h2 {
      font-weight: 700;
      text-decoration: none;
      font-size: 35px;
      width: 250px;
      margin: 130px auto 20px;
      text-align: center;
      color: #13989D;
    }

    .alert {
      display: block;
      text-align: center;
      color: red;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .form {
      width: 250px;
      background-color: #edeff2;
      border-radius: 4px;
      padding: 30px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    .form>* {
      width: 100%;
      box-sizing: border-box;
      margin: 5px 0;
      font-size: 0.9em;
    }

    .form>input {
      height: 30px;
    }
</style>