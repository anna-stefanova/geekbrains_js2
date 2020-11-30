/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 61:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/BlockResult.js":
/*!****************************!*\
  !*** ./src/BlockResult.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BlockResult
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

class BlockResult {
  constructor() {
    this.render();
  }

  render() {
    return new Promise(resolve => {
      let result = (0,_index__WEBPACK_IMPORTED_MODULE_0__.default)();
      resolve(result);
    }).then(result => {
      const blockCart = document.querySelector('.modal_content.cart');
      let divResult = document.createElement('div');
      divResult.classList.add('resultAmount');
      divResult.innerHTML = `<p>Итого</p><p class="res">${result}</p>`;
      blockCart.append(divResult);
    });
  }

}

/***/ }),

/***/ "./src/BtnBuy.js":
/*!***********************!*\
  !*** ./src/BtnBuy.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BtnBuy
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/globals.js");


class BtnBuy extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(text, classBtn, id) {
    super(text, classBtn, id);
  }

  add(cartItem) {
    if (this.cartList.length) {
      let res = [];
      this.cartList.forEach(obj => {
        if (this.id === obj.id) {
          obj.count++;
          res.push(true);
        } else res.push(false);
      });
      if (!res.includes(true)) this.cartList.push(cartItem);
    }

    if (this.cartList.length === 0) {
      this.cartList.push(cartItem);
    }
  }

  btnOnClick(id) {
    return new Promise(resolve => {
      let good = document.getElementById(`${id}`);
      let name = good.querySelector('.title');
      name = name.innerHTML;
      let price = good.querySelector('.price');
      price = price.innerHTML;
      let count = '1';
      let cartItem = {
        id,
        name,
        price,
        count
      };
      resolve(cartItem);
    }).then(cartItem => this.add(cartItem));
  }

  render() {
    return super.render();
  }

}

/***/ }),

/***/ "./src/BtnDelete.js":
/*!**************************!*\
  !*** ./src/BtnDelete.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BtnDelete
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");

class BtnDelete extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(text, classBtn, id, input) {
    super(text, classBtn, id, input);
  }

  btnOnClick(id, input) {
    let goodItem = document.getElementById(id);
    if (goodItem) goodItem.remove();
    input.value = 0;
    this.cartList.forEach(obj => {
      if (id === '0' + obj.id) {
        obj.count = input.value;
      }
    });
    return super.btnOnClick();
  }

  render() {
    return super.render();
  }

}

/***/ }),

/***/ "./src/BtnMinus.js":
/*!*************************!*\
  !*** ./src/BtnMinus.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BtnMinus
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");

class BtnMinus extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(text, classBtn, id, input) {
    super(text, classBtn, id, input);
  }

  btnOnClick(id, input) {
    const subtract = new Promise(resolve => {
      if (input.value > 0) {
        input.value--;
      }

      if (input.value === '0') {
        let goodItem = document.getElementById(id);
        if (goodItem) goodItem.remove();
      }

      resolve();
    });
    subtract.then(() => {
      this.cartList.forEach(obj => {
        if (id === '0' + obj.id) {
          obj.count = input.value;
        }
      });
    }).then(() => {
      return super.btnOnClick();
    });
  }

  render() {
    return super.render();
  }

}

/***/ }),

/***/ "./src/BtnPlus.js":
/*!************************!*\
  !*** ./src/BtnPlus.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BtnPlus
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");

class BtnPlus extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {
  constructor(text, classBtn, id, input) {
    super(text, classBtn, id, input);
  }

  btnOnClick(id, input) {
    const sum = new Promise(resolve => {
      input.value++;
      resolve();
    });
    sum.then(() => {
      this.cartList.forEach(obj => {
        if (id === '0' + obj.id) {
          obj.count = input.value;
        }
      });
    }).then(() => {
      return super.btnOnClick();
    });
  }

  render() {
    return super.render();
  }

}

/***/ }),

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Button
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./src/globals.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Button {
  constructor(text, classBtn, id, input) {
    _defineProperty(this, "text", '');

    _defineProperty(this, "cartList", []);

    _defineProperty(this, "classBtn", '');

    _defineProperty(this, "input", '');

    _defineProperty(this, "id", '');

    this.cartList = _globals__WEBPACK_IMPORTED_MODULE_1__.listGoods;
    this.text = text;
    this.classBtn = classBtn;
    this.id = id;
    this.input = input;
  }

  btnOnClick() {
    new Promise(resolve => {
      resolve((0,_index__WEBPACK_IMPORTED_MODULE_0__.default)());
    }).then(result => {
      let divResult = document.querySelector('.res');
      divResult.innerHTML = result;
    });
  }

  render() {
    let btn = document.createElement('button');
    btn.classList.add(this.classBtn);
    btn.innerHTML = this.text;
    btn.addEventListener('click', () => {
      this.btnOnClick(this.id, this.input);
    });
    return btn;
  }

}

/***/ }),

/***/ "./src/Cart.js":
/*!*********************!*\
  !*** ./src/Cart.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cart
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/globals.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ "./src/CartItem.js");
/* harmony import */ var _BlockResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockResult */ "./src/BlockResult.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Cart {
  constructor() {
    _defineProperty(this, "items", []);

    _defineProperty(this, "cartList", []);

    this.init();
  }

  init() {
    let cart = document.querySelector('.hrefCart');
    cart.addEventListener('click', event => {
      event.preventDefault();
      let cartList = document.querySelector('.modal.cart');
      cartList.classList.add('open');
      let contentCart = document.querySelector('.contentCart');
      contentCart.innerHTML = '';
      let goods = this.fetchGoods();
      goods = goods.map(cur => {
        return new _CartItem__WEBPACK_IMPORTED_MODULE_1__.default(cur);
      });
      this.items = goods;
      this.render();
      let blockResult = document.querySelector('.resultAmount');
      if (blockResult) blockResult.remove();
      new _BlockResult__WEBPACK_IMPORTED_MODULE_2__.default();
      let closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', () => {
        cartList.classList.remove('open');
      });
    });
  }

  fetchGoods() {
    this.cartList = _globals__WEBPACK_IMPORTED_MODULE_0__.listGoods;
    this.cartList = this.cartList.filter(obj => obj.count > 0);
    return this.cartList;
  }

  render() {
    this.items.forEach(good => {
      good.render();
    });
  }

}

/***/ }),

/***/ "./src/CartItem.js":
/*!*************************!*\
  !*** ./src/CartItem.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ CartItem
/* harmony export */ });
/* harmony import */ var _BtnMinus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnMinus */ "./src/BtnMinus.js");
/* harmony import */ var _BtnPlus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BtnPlus */ "./src/BtnPlus.js");
/* harmony import */ var _BtnDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnDelete */ "./src/BtnDelete.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CartItem {
  constructor({
    id,
    name,
    price,
    count
  }) {
    _defineProperty(this, "id", '');

    _defineProperty(this, "name", '');

    _defineProperty(this, "price", 0);

    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }

  render() {
    const placeToRender = document.querySelector('.contentCart');

    if (placeToRender) {
      const block = document.createElement('div');
      block.classList.add('cart__item');
      block.setAttribute('id', `0${this.id}`);
      block.innerHTML = `
                <h3 class="cart__item__title">${this.name}</h3>
                <div class="cart__item__price">${this.price}</div>
                <div class="amount"></div>
            `;
      placeToRender.append(block);
      const amount = block.querySelector('.amount');
      const inputAmount = document.createElement('input');
      inputAmount.classList.add('amountGood');
      inputAmount.value = String(this.count);
      inputAmount.size = 3;
      amount.append(inputAmount);
      const AddBtnMinus = new _BtnMinus__WEBPACK_IMPORTED_MODULE_0__.default('-', 'minus', `0${this.id}`, inputAmount);
      amount.append(AddBtnMinus.render());
      const AddBtnPlus = new _BtnPlus__WEBPACK_IMPORTED_MODULE_1__.default('+', 'plus', `0${this.id}`, inputAmount);
      amount.append(AddBtnPlus.render());
      const AddBtnDelete = new _BtnDelete__WEBPACK_IMPORTED_MODULE_2__.default('x', 'delete', `0${this.id}`, inputAmount);
      amount.append(AddBtnDelete.render());
    }
  }

}

/***/ }),

/***/ "./src/GoodItem.js":
/*!*************************!*\
  !*** ./src/GoodItem.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GoodItem
/* harmony export */ });
/* harmony import */ var _BtnBuy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BtnBuy */ "./src/BtnBuy.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class GoodItem {
  constructor({
    name,
    price
  }, id) {
    _defineProperty(this, "name", '');

    _defineProperty(this, "price", 0);

    this.name = name;
    this.price = price;
    this.id = id;
  }

  render() {
    return new Promise(resolve => {
      const placeToRender = document.querySelector('.goods');

      if (placeToRender) {
        const block = document.createElement('div');
        block.classList.add('goods__item');
        block.setAttribute('id', this.id);
        block.innerHTML = `
                <img src="img/no-image.jpg" alt="">
                <div class="description">
                    <h3 class="title">${this.name}</h3>
                    <p class="price">${this.price}</p>
                </div>
                `;
        placeToRender.append(block);
        resolve(block);
      }
    }).then(block => {
      const AddBtnBuy = new _BtnBuy__WEBPACK_IMPORTED_MODULE_0__.default('Купить', 'btnBuy', this.id);
      block.append(AddBtnBuy.render());
    });
  }

}

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ List
/* harmony export */ });
/* harmony import */ var _GoodItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodItem */ "./src/GoodItem.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class List {
  constructor() {
    _defineProperty(this, "items", []);

    let goodsPromise = this.fetchGoods();
    goodsPromise.then(() => {
      this.render();
    });
  }

  fetchGoods() {
    const result = fetch('database.json');
    return result.then(res => {
      return res.json();
    }).then(data => {
      this.items = data.data.map((cur, index) => {
        return new _GoodItem__WEBPACK_IMPORTED_MODULE_0__.default(cur, index);
      });
    });
  }

  render() {
    this.items.forEach(good => {
      good.render();
    });
  }

}

/***/ }),

/***/ "./src/RegForm.js":
/*!************************!*\
  !*** ./src/RegForm.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RegForm
/* harmony export */ });
class RegForm {
  constructor() {
    this.getData();
  }

  getData() {
    const form = document.querySelector('.form');

    if (form) {
      const name = form.querySelector('[name="name"]');
      name.addEventListener("input", event => {
        event.preventDefault();
        const regexp = /[a-zа-я]+$/gi;
        const message = "Имя должно содержать только буквы";
        this.check(name.value, regexp, message, name.name);
      });
      const phone = form.querySelector('[name="phone"]');
      phone.addEventListener("input", event => {
        event.preventDefault();
        const regexp = /^\+7\(\d{3}\b\)\d{3}\b-\d{4}\b/;
        const message = "Введите телефон в формате +7(000)000-0000";
        this.check(phone.value, regexp, message, phone.name);
        npm;
      });
      const email = form.querySelector('[name="email"]');
      email.addEventListener("input", event => {
        event.preventDefault();
        const regexp = /^[a-z]+[.-]*[a-z]+@mail.ru/i;
        const message = "Введите email в формате 'mymail@mymail.ru', 'my-mail@mymail.ru', 'my.mail@mymail.ru'";
        this.check(email.value, regexp, message, email.name);
      });
    }
  }

  check(data, regexp, message, dataName) {
    const form = document.querySelector('.form');

    if (!data.match(regexp)) {
      if (!document.querySelector(`.alert.${dataName}`)) {
        let span = document.createElement('span');
        span.classList.add('alert', dataName);
        span.innerHTML = message;
        form.before(span);
      }
    } else {
      if (document.querySelector(`.alert.${dataName}`)) {
        document.querySelector(`.alert.${dataName}`).remove();
      }
    }
  }

}

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/*! namespace exports */
/*! export listGoods [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listGoods": () => /* binding */ listGoods
/* harmony export */ });
var listGoods = [];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ calculateAmount
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart */ "./src/Cart.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ "./src/List.js");
/* harmony import */ var _RegForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegForm */ "./src/RegForm.js");

function calculateAmount() {
  const blockCart = document.querySelector('.modal_content.cart');
  const placeToRender = blockCart.querySelectorAll('.cart__item');
  let result = 0;
  placeToRender.forEach(block => {
    let amount = block.querySelector('.amountGood').value;
    let price = block.querySelector('.cart__item__price').innerHTML;
    result = result + amount * price;
  });
  return result;
}



new _Cart__WEBPACK_IMPORTED_MODULE_1__.default();
new _List__WEBPACK_IMPORTED_MODULE_2__.default();
new _RegForm__WEBPACK_IMPORTED_MODULE_3__.default();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n}\nbody {\n    margin: 0;\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n}\n\nbody>.main-content {\n    flex-grow: 1;\n}\nheader, footer {\n    flex: 0 0 auto;\n    height: 100px;\n    background-color: red;\n    /*background-color: #13989D;*/\n}\n\n.container {\n    max-width: 1240px;\n    margin: 0 auto;\n}\nheader>.container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nul {\n    padding-top: 15px;\n}\n\nheader>.container>nav li {\n    display: inline-block;\n    margin: 0 20px;\n}\n\nli>a {\n    text-decoration: none;\n    color: white;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n}\n\n.logo {\n    margin-top: 10px;\n    margin-left: 20px;\n}\n\n.logo__item {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 50px;\n    color: white;\n    opacity: 1;\n}\n\n/**  Goods ***/\n\n.goods {\n    min-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n.goods__item {\n    width: 23%;\n    margin: 20px;\n}\n.goods__item img {\n    width: 100%;\n    height: 280px;\n}\n.goods__item h3:hover {\n    color: #13989D;\n    cursor: pointer;\n}\n\n.description {\n    display: flex;\n    justify-content: space-around;\n    margin: 15px 0;\n}\n\n.price {\n    margin-top: 5px;\n    font-size: 24px;\n    font-weight: 400;\n    font-style: italic;\n    color: #ff0000;\n}\n\n.btnBuy {\n    cursor: pointer;\n    background: #9D1813;\n    color: #ffffff;\n    padding: 0.8em 1.1em;\n    border-radius: 5px;\n    box-sizing: border-box;\n    font-size: 0.9em;\n    font-weight: 700;\n}\n\n.btnBuy:hover {\n    border: #ffffff solid 1px;\n    box-sizing: border-box;\n}\n\n.title {\n    margin-top: 10px;\n}\n\n\n\n@media (max-width: 1030px) {\n    .goods {\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n}\n\n/* Modal */\n\n.modal {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    left: 0;\n    top: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.8s ease 0s;\n}\n/*.modal.open,*/ .modal.cart.open {\n    opacity: 1;\n    visibility: visible;\n}\n\n\n.modal_body {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 30px 10px;\n}\n\n.close {\n    text-align: end;\n}\n\n.modal_content {\n    min-width: 375px;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #edeff2;\n\n}\n\n.headerCart h2 {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    font-size: 35px;\n    width: 250px;\n    margin: 0 auto;\n    text-align: center;\n    color: #13989D;\n}\n\n.close {\n    margin-top: 10px;\n    margin-right: 15px;\n    font-weight: 700;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.cart__item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n}\n\n.cart__item__description {\n    display: flex;\n    flex-direction: row;\n}\n\n.resultAmount {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 10px 45px 45px;\n    border-top: 1px solid black;\n}\n\n.resultAmount p {\n    margin-top: 10px;\n}\n\n.cart__item {\n    margin: 10px 45px 10px 45px;\n}\n\n.amountGood {\n    height: 20px;\n}\n\n.minus, .plus, .delete {\n\n    margin-top: 1px;\n    background-color: #9D1813;\n    color: #ffffff;\n    font-weight: 700;\n    font-size: 18px;\n    height: 25px;\n    width: 25px;\n    outline: none;\n    box-sizing: border-box;\n    border-top: 1px solid #99a8bf;\n    border-left: 1px dotted #99a8bf;\n    border-bottom: 1px solid #99a8bf;\n    cursor: pointer;\n}\n\n.cart__item__price {\n    margin-top: 5px;\n}\n\n/**** Registration *****/\nh2 {\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 35px;\n    width: 250px;\n    margin: 130px auto 20px;\n    text-align: center;\n    color: #13989D;\n}\n\n.alert {\n    display: block;\n    text-align: center;\n    color: red;\n    font-size: 16px;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    margin-bottom: 10px;\n}\n\n.form {\n    width: 250px;\n    background-color: #edeff2;\n    border-radius: 4px;\n    padding: 30px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.form>* {\n    width: 100%;\n    box-sizing: border-box;\n    margin: 5px 0;\n    font-size: 0.9em;\n}\n\n.form>input {\n    height: 30px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;AACA;IACI,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,aAAa;IACb,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,kCAAkC;IAClC,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,UAAU;AACd;;AAEA,cAAc;;AAEd;IACI,iBAAiB;IACjB,aAAa;IACb,eAAe;AACnB;AACA;IACI,UAAU;IACV,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;;;AAIA;IACI;QACI,uBAAuB;QACvB,eAAe;IACnB;AACJ;;AAEA,UAAU;;AAEV;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,OAAO;IACP,MAAM;IACN,UAAU;IACV,kBAAkB;IAClB,4BAA4B;AAChC;AACA,eAAe,EAAE;IACb,UAAU;IACV,mBAAmB;AACvB;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;;AAE7B;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;AAElC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,+BAA+B;IAC/B,gCAAgC;IAChC,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,kCAAkC;IAClC,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n}\nbody {\n    margin: 0;\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n}\n\nbody>.main-content {\n    flex-grow: 1;\n}\nheader, footer {\n    flex: 0 0 auto;\n    height: 100px;\n    background-color: red;\n    /*background-color: #13989D;*/\n}\n\n.container {\n    max-width: 1240px;\n    margin: 0 auto;\n}\nheader>.container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nul {\n    padding-top: 15px;\n}\n\nheader>.container>nav li {\n    display: inline-block;\n    margin: 0 20px;\n}\n\nli>a {\n    text-decoration: none;\n    color: white;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    font-size: 18px;\n    text-transform: uppercase;\n}\n\n.logo {\n    margin-top: 10px;\n    margin-left: 20px;\n}\n\n.logo__item {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 50px;\n    color: white;\n    opacity: 1;\n}\n\n/**  Goods ***/\n\n.goods {\n    min-height: 400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n.goods__item {\n    width: 23%;\n    margin: 20px;\n}\n.goods__item img {\n    width: 100%;\n    height: 280px;\n}\n.goods__item h3:hover {\n    color: #13989D;\n    cursor: pointer;\n}\n\n.description {\n    display: flex;\n    justify-content: space-around;\n    margin: 15px 0;\n}\n\n.price {\n    margin-top: 5px;\n    font-size: 24px;\n    font-weight: 400;\n    font-style: italic;\n    color: #ff0000;\n}\n\n.btnBuy {\n    cursor: pointer;\n    background: #9D1813;\n    color: #ffffff;\n    padding: 0.8em 1.1em;\n    border-radius: 5px;\n    box-sizing: border-box;\n    font-size: 0.9em;\n    font-weight: 700;\n}\n\n.btnBuy:hover {\n    border: #ffffff solid 1px;\n    box-sizing: border-box;\n}\n\n.title {\n    margin-top: 10px;\n}\n\n\n\n@media (max-width: 1030px) {\n    .goods {\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n}\n\n/* Modal */\n\n.modal {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    left: 0;\n    top: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.8s ease 0s;\n}\n/*.modal.open,*/ .modal.cart.open {\n    opacity: 1;\n    visibility: visible;\n}\n\n\n.modal_body {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 30px 10px;\n}\n\n.close {\n    text-align: end;\n}\n\n.modal_content {\n    min-width: 375px;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #edeff2;\n\n}\n\n.headerCart h2 {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    font-size: 35px;\n    width: 250px;\n    margin: 0 auto;\n    text-align: center;\n    color: #13989D;\n}\n\n.close {\n    margin-top: 10px;\n    margin-right: 15px;\n    font-weight: 700;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.cart__item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n}\n\n.cart__item__description {\n    display: flex;\n    flex-direction: row;\n}\n\n.resultAmount {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 10px 45px 45px;\n    border-top: 1px solid black;\n}\n\n.resultAmount p {\n    margin-top: 10px;\n}\n\n.cart__item {\n    margin: 10px 45px 10px 45px;\n}\n\n.amountGood {\n    height: 20px;\n}\n\n.minus, .plus, .delete {\n\n    margin-top: 1px;\n    background-color: #9D1813;\n    color: #ffffff;\n    font-weight: 700;\n    font-size: 18px;\n    height: 25px;\n    width: 25px;\n    outline: none;\n    box-sizing: border-box;\n    border-top: 1px solid #99a8bf;\n    border-left: 1px dotted #99a8bf;\n    border-bottom: 1px solid #99a8bf;\n    cursor: pointer;\n}\n\n.cart__item__price {\n    margin-top: 5px;\n}\n\n/**** Registration *****/\nh2 {\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 35px;\n    width: 250px;\n    margin: 130px auto 20px;\n    text-align: center;\n    color: #13989D;\n}\n\n.alert {\n    display: block;\n    text-align: center;\n    color: red;\n    font-size: 16px;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    margin-bottom: 10px;\n}\n\n.form {\n    width: 250px;\n    background-color: #edeff2;\n    border-radius: 4px;\n    padding: 30px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.form>* {\n    width: 100%;\n    box-sizing: border-box;\n    margin: 5px 0;\n    font-size: 0.9em;\n}\n\n.form>input {\n    height: 30px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWVrYnJhaW5zX2pzMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9nZWVrYnJhaW5zX2pzMi8uL3NyYy9CbG9ja1Jlc3VsdC5qcyIsIndlYnBhY2s6Ly9nZWVrYnJhaW5zX2pzMi8uL3NyYy9CdG5CdXkuanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvQnRuRGVsZXRlLmpzIiwid2VicGFjazovL2dlZWticmFpbnNfanMyLy4vc3JjL0J0bk1pbnVzLmpzIiwid2VicGFjazovL2dlZWticmFpbnNfanMyLy4vc3JjL0J0blBsdXMuanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvQnV0dG9uLmpzIiwid2VicGFjazovL2dlZWticmFpbnNfanMyLy4vc3JjL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvR29vZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9nZWVrYnJhaW5zX2pzMi8uL3NyYy9SZWdGb3JtLmpzIiwid2VicGFjazovL2dlZWticmFpbnNfanMyLy4vc3JjL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9nZWVrYnJhaW5zX2pzMi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dlZWticmFpbnNfanMyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2Vla2JyYWluc19qczIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZWVrYnJhaW5zX2pzMi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfcyIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJpc0FycmF5IiwiX2l0ZW0iLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiQmxvY2tSZXN1bHQiLCJyZW5kZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc3VsdCIsImNhbGN1bGF0ZUFtb3VudCIsInRoZW4iLCJibG9ja0NhcnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXZSZXN1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiQnRuQnV5IiwiQnV0dG9uIiwidGV4dCIsImNsYXNzQnRuIiwiY2FydEl0ZW0iLCJjYXJ0TGlzdCIsInJlcyIsImZvckVhY2giLCJvYmoiLCJjb3VudCIsImluY2x1ZGVzIiwiYnRuT25DbGljayIsImdvb2QiLCJnZXRFbGVtZW50QnlJZCIsInByaWNlIiwiQnRuRGVsZXRlIiwiaW5wdXQiLCJnb29kSXRlbSIsInJlbW92ZSIsIkJ0bk1pbnVzIiwic3VidHJhY3QiLCJCdG5QbHVzIiwic3VtIiwibGlzdEdvb2RzIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNhcnQiLCJpbml0IiwiY2FydCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb250ZW50Q2FydCIsImdvb2RzIiwiZmV0Y2hHb29kcyIsImN1ciIsIkNhcnRJdGVtIiwiaXRlbXMiLCJibG9ja1Jlc3VsdCIsImNsb3NlQnRuIiwiZmlsdGVyIiwicGxhY2VUb1JlbmRlciIsImJsb2NrIiwic2V0QXR0cmlidXRlIiwiYW1vdW50IiwiaW5wdXRBbW91bnQiLCJTdHJpbmciLCJzaXplIiwiQWRkQnRuTWludXMiLCJBZGRCdG5QbHVzIiwiQWRkQnRuRGVsZXRlIiwiR29vZEl0ZW0iLCJBZGRCdG5CdXkiLCJMaXN0IiwiZ29vZHNQcm9taXNlIiwiZmV0Y2giLCJqc29uIiwiaW5kZXgiLCJSZWdGb3JtIiwiZ2V0RGF0YSIsImZvcm0iLCJyZWdleHAiLCJtZXNzYWdlIiwiY2hlY2siLCJwaG9uZSIsIm5wbSIsImVtYWlsIiwiZGF0YU5hbWUiLCJtYXRjaCIsInNwYW4iLCJiZWZvcmUiLCJxdWVyeVNlbGVjdG9yQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxzQkFBVixFQUFrQztBQUNqRCxNQUFJQyxJQUFJLEdBQUcsRUFBWCxDQURpRCxDQUNsQzs7QUFFZkEsTUFBSSxDQUFDQyxRQUFMLEdBQWdCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEMsV0FBTyxLQUFLQyxHQUFMLENBQVMsVUFBVUMsSUFBVixFQUFnQjtBQUM5QixVQUFJQyxPQUFPLEdBQUdMLHNCQUFzQixDQUFDSSxJQUFELENBQXBDOztBQUVBLFVBQUlBLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYLGVBQU8sVUFBVUUsTUFBVixDQUFpQkYsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NFLE1BQWhDLENBQXVDRCxPQUF2QyxFQUFnRCxHQUFoRCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNELEtBUk0sRUFRSkUsSUFSSSxDQVFDLEVBUkQsQ0FBUDtBQVNELEdBVkQsQ0FIaUQsQ0FhOUM7QUFDSDs7O0FBR0FOLE1BQUksQ0FBQ08sQ0FBTCxHQUFTLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxNQUEvQixFQUF1QztBQUM5QyxRQUFJLE9BQU9GLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0I7QUFDQUEsYUFBTyxHQUFHLENBQUMsQ0FBQyxJQUFELEVBQU9BLE9BQVAsRUFBZ0IsRUFBaEIsQ0FBRCxD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QU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLGVBQWUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9B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QSIsImZpbGUiOiJzaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBjYWxjdWxhdGVBbW91bnQgZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxjdWxhdGVBbW91bnQoKTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxvY2tDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX2NvbnRlbnQuY2FydCcpO1xuICAgICAgICAgICAgbGV0IGRpdlJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2UmVzdWx0LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdEFtb3VudCcpO1xuICAgICAgICAgICAgZGl2UmVzdWx0LmlubmVySFRNTCA9IGA8cD7QmNGC0L7Qs9C+PC9wPjxwIGNsYXNzPVwicmVzXCI+JHtyZXN1bHR9PC9wPmA7XG4gICAgICAgICAgICBibG9ja0NhcnQuYXBwZW5kKGRpdlJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7bGlzdEdvb2RzfSBmcm9tICcuL2dsb2JhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdG5CdXkgZXh0ZW5kcyBCdXR0b24ge1xuXG4gICAgY29uc3RydWN0b3IodGV4dCwgY2xhc3NCdG4sIGlkKSB7XG4gICAgICAgIHN1cGVyKHRleHQsIGNsYXNzQnRuLCBpZCk7XG4gICAgfVxuXG4gICAgYWRkIChjYXJ0SXRlbSkge1xuICAgICAgICBpZiAodGhpcy5jYXJ0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2FydExpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT09IG9iai5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvYmouY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJlcy5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXMuaW5jbHVkZXModHJ1ZSkpIHRoaXMuY2FydExpc3QucHVzaChjYXJ0SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnRMaXN0LnB1c2goY2FydEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnRuT25DbGljayAoaWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbGV0IGdvb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gZ29vZC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCBwcmljZSA9IGdvb2QucXVlcnlTZWxlY3RvcignLnByaWNlJyk7XG4gICAgICAgICAgICBwcmljZSA9IHByaWNlLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCBjb3VudCA9ICcxJztcbiAgICAgICAgICAgIGxldCBjYXJ0SXRlbSA9IHsgaWQsIG5hbWUsIHByaWNlLCBjb3VudCB9O1xuICAgICAgICAgICAgcmVzb2x2ZShjYXJ0SXRlbSk7XG4gICAgICAgIH0pLnRoZW4oY2FydEl0ZW0gPT4gdGhpcy5hZGQoY2FydEl0ZW0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdG5EZWxldGUgZXh0ZW5kcyBCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQsIGNsYXNzQnRuLCBpZCwgaW5wdXQpIHtcbiAgICAgICAgc3VwZXIodGV4dCwgY2xhc3NCdG4sIGlkLCBpbnB1dCk7XG4gICAgfVxuXG4gICAgYnRuT25DbGljayAoaWQsIGlucHV0KSB7XG4gICAgICAgIGxldCBnb29kSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKGdvb2RJdGVtKSBnb29kSXRlbS5yZW1vdmUoKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAwO1xuXG4gICAgICAgIHRoaXMuY2FydExpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAoaWQgPT09ICgnMCcgKyBvYmouaWQpKSB7XG4gICAgICAgICAgICAgICAgb2JqLmNvdW50ID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VwZXIuYnRuT25DbGljaygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnRuTWludXMgZXh0ZW5kcyBCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQsIGNsYXNzQnRuLCBpZCwgaW5wdXQpIHtcbiAgICAgICAgc3VwZXIodGV4dCwgY2xhc3NCdG4sIGlkLCBpbnB1dCk7XG4gICAgfVxuXG4gICAgYnRuT25DbGljayAoaWQsIGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHN1YnRyYWN0ID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdvb2RJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgIGlmIChnb29kSXRlbSkgZ29vZEl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJ0cmFjdC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydExpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSAoJzAnICsgb2JqLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmouY291bnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuYnRuT25DbGljaygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0blBsdXMgZXh0ZW5kcyBCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQsIGNsYXNzQnRuLCBpZCwgaW5wdXQpIHtcbiAgICAgICAgc3VwZXIodGV4dCwgY2xhc3NCdG4sIGlkLCBpbnB1dCk7XG4gICAgfVxuXG4gICAgYnRuT25DbGljayAoaWQsIGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHN1bSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUrKztcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1bS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FydExpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSAoJzAnICsgb2JqLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmouY291bnQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuYnRuT25DbGljaygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IGNhbGN1bGF0ZUFtb3VudCBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHtsaXN0R29vZHN9IGZyb20gJy4vZ2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XG4gICAgdGV4dCA9ICcnO1xuICAgIGNhcnRMaXN0ID0gW107XG4gICAgY2xhc3NCdG4gPSAnJztcbiAgICBpbnB1dCA9ICcnO1xuICAgIGlkID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBjbGFzc0J0biwgaWQsIGlucHV0KSB7XG4gICAgICAgIHRoaXMuY2FydExpc3QgPSBsaXN0R29vZHM7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuY2xhc3NCdG4gPSBjbGFzc0J0bjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgYnRuT25DbGljayAoKSB7XG4gICAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShjYWxjdWxhdGVBbW91bnQoKSk7XG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxldCBkaXZSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzJyk7XG4gICAgICAgICAgICBkaXZSZXN1bHQuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NCdG4pO1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ0bk9uQ2xpY2sodGhpcy5pZCwgdGhpcy5pbnB1dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cbn0iLCJpbXBvcnQge2xpc3RHb29kc30gZnJvbSAnLi9nbG9iYWxzJztcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuL0NhcnRJdGVtJztcbmltcG9ydCBCbG9ja1Jlc3VsdCBmcm9tICcuL0Jsb2NrUmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XG4gICAgaXRlbXMgPSBbXTtcbiAgICBjYXJ0TGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQgKCkge1xuXG4gICAgICAgIGxldCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhyZWZDYXJ0Jyk7XG4gICAgICAgIGNhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBjYXJ0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5jYXJ0Jyk7XG4gICAgICAgICAgICBjYXJ0TGlzdC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICBsZXQgY29udGVudENhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudENhcnQnKTtcbiAgICAgICAgICAgIGNvbnRlbnRDYXJ0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBsZXQgZ29vZHMgPSB0aGlzLmZldGNoR29vZHMoKTtcbiAgICAgICAgICAgIGdvb2RzID0gZ29vZHMubWFwKGN1ciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJ0SXRlbShjdXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gZ29vZHM7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgICAgICBsZXQgYmxvY2tSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0QW1vdW50Jyk7XG4gICAgICAgICAgICBpZiAoYmxvY2tSZXN1bHQpIGJsb2NrUmVzdWx0LnJlbW92ZSgpO1xuICAgICAgICAgICAgbmV3IEJsb2NrUmVzdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICAgICAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FydExpc3QuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZldGNoR29vZHMgKCkge1xuICAgICAgICB0aGlzLmNhcnRMaXN0ID0gbGlzdEdvb2RzO1xuXG4gICAgICAgIHRoaXMuY2FydExpc3QgPSB0aGlzLmNhcnRMaXN0LmZpbHRlcihvYmogPT4gb2JqLmNvdW50ID4gMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydExpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChnb29kKSA9PiB7XG4gICAgICAgICAgICBnb29kLnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgIH1cbn0iLCJcbmltcG9ydCBCdG5NaW51cyBmcm9tICcuL0J0bk1pbnVzJztcbmltcG9ydCBCdG5QbHVzIGZyb20gJy4vQnRuUGx1cyc7XG5pbXBvcnQgQnRuRGVsZXRlIGZyb20gJy4vQnRuRGVsZXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW0ge1xuICAgIGlkID0gJyc7XG4gICAgbmFtZSA9ICcnO1xuICAgIHByaWNlID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHsgaWQsIG5hbWUsIHByaWNlLCBjb3VudCB9KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgcGxhY2VUb1JlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q2FydCcpO1xuICAgICAgICBpZiAocGxhY2VUb1JlbmRlcikge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NhcnRfX2l0ZW0nKTtcbiAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCBgMCR7dGhpcy5pZH1gKTtcbiAgICAgICAgICAgIGJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJ0X19pdGVtX190aXRsZVwiPiR7dGhpcy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnRfX2l0ZW1fX3ByaWNlXCI+JHt0aGlzLnByaWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbW91bnRcIj48L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBwbGFjZVRvUmVuZGVyLmFwcGVuZChibG9jayk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5hbW91bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0QW1vdW50LmNsYXNzTGlzdC5hZGQoJ2Ftb3VudEdvb2QnKTtcbiAgICAgICAgICAgIGlucHV0QW1vdW50LnZhbHVlID0gU3RyaW5nKHRoaXMuY291bnQpO1xuICAgICAgICAgICAgaW5wdXRBbW91bnQuc2l6ZSA9IDM7XG4gICAgICAgICAgICBhbW91bnQuYXBwZW5kKGlucHV0QW1vdW50KTtcblxuICAgICAgICAgICAgY29uc3QgQWRkQnRuTWludXMgPSBuZXcgQnRuTWludXMoJy0nLCAnbWludXMnLCBgMCR7dGhpcy5pZH1gLCBpbnB1dEFtb3VudCk7XG4gICAgICAgICAgICBhbW91bnQuYXBwZW5kKEFkZEJ0bk1pbnVzLnJlbmRlcigpKTtcblxuICAgICAgICAgICAgY29uc3QgQWRkQnRuUGx1cyA9IG5ldyBCdG5QbHVzKCcrJywgJ3BsdXMnLCBgMCR7dGhpcy5pZH1gLCBpbnB1dEFtb3VudCk7XG4gICAgICAgICAgICBhbW91bnQuYXBwZW5kKEFkZEJ0blBsdXMucmVuZGVyKCkpO1xuXG4gICAgICAgICAgICBjb25zdCBBZGRCdG5EZWxldGUgPSBuZXcgQnRuRGVsZXRlKCd4JywgJ2RlbGV0ZScsIGAwJHt0aGlzLmlkfWAsIGlucHV0QW1vdW50KTtcbiAgICAgICAgICAgIGFtb3VudC5hcHBlbmQoQWRkQnRuRGVsZXRlLnJlbmRlcigpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbmltcG9ydCBCdG5CdXkgZnJvbSAnLi9CdG5CdXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kSXRlbSB7XG4gICAgbmFtZSA9ICcnO1xuICAgIHByaWNlID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwgcHJpY2UgfSwgaWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZVRvUmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzJyk7XG5cbiAgICAgICAgICAgIGlmIChwbGFjZVRvUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdnb29kc19faXRlbScpO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICBibG9jay5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbm8taW1hZ2UuanBnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiR7dGhpcy5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICBwbGFjZVRvUmVuZGVyLmFwcGVuZChibG9jayk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBBZGRCdG5CdXkgPSBuZXcgQnRuQnV5KCfQmtGD0L/QuNGC0YwnLCAnYnRuQnV5JywgdGhpcy5pZCk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmQoQWRkQnRuQnV5LnJlbmRlcigpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG59IiwiaW1wb3J0IEdvb2RJdGVtIGZyb20gJy4vR29vZEl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgICBpdGVtcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBnb29kc1Byb21pc2UgPSB0aGlzLmZldGNoR29vZHMoKTtcbiAgICAgICAgZ29vZHNQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZldGNoR29vZHMgKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBmZXRjaCgnZGF0YWJhc2UuanNvbicpO1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBkYXRhLmRhdGEubWFwKChjdXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR29vZEl0ZW0oY3VyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoZ29vZCkgPT4ge1xuICAgICAgICAgICAgZ29vZC5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgIH1cblxuICAgIGdldERhdGEgKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwibmFtZVwiXScpO1xuICAgICAgICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleHAgPSAvW2EtetCwLdGPXSskL2dpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcItCY0LzRjyDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINGC0L7Qu9GM0LrQviDQsdGD0LrQstGLXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjayhuYW1lLnZhbHVlLCByZWdleHAsIG1lc3NhZ2UsIG5hbWUubmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcGhvbmUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGhvbmVcIl0nKTtcbiAgICAgICAgICAgIHBob25lLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IC9eXFwrN1xcKFxcZHszfVxcYlxcKVxcZHszfVxcYi1cXGR7NH1cXGIvO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcItCS0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9INCyINGE0L7RgNC80LDRgtC1ICs3KDAwMCkwMDAtMDAwMFwiXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjayhwaG9uZS52YWx1ZSwgcmVnZXhwLCBtZXNzYWdlLCBwaG9uZS5uYW1lKTtucG1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpO1xuICAgICAgICAgICAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gL15bYS16XStbLi1dKlthLXpdK0BtYWlsLnJ1L2k7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwi0JLQstC10LTQuNGC0LUgZW1haWwg0LIg0YTQvtGA0LzQsNGC0LUgJ215bWFpbEBteW1haWwucnUnLCAnbXktbWFpbEBteW1haWwucnUnLCAnbXkubWFpbEBteW1haWwucnUnXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjayhlbWFpbC52YWx1ZSwgcmVnZXhwLCBtZXNzYWdlLCBlbWFpbC5uYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGNoZWNrKGRhdGEsIHJlZ2V4cCwgbWVzc2FnZSwgZGF0YU5hbWUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLm1hdGNoKHJlZ2V4cCkpIHtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFsZXJ0LiR7ZGF0YU5hbWV9YCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0JywgZGF0YU5hbWUpO1xuICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBmb3JtLmJlZm9yZShzcGFuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWxlcnQuJHtkYXRhTmFtZX1gKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hbGVydC4ke2RhdGFOYW1lfWApLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIlxuZXhwb3J0IHZhciBsaXN0R29vZHMgPSBbXTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFtb3VudCgpIHtcbiAgICBjb25zdCBibG9ja0NhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfY29udGVudC5jYXJ0Jyk7XG4gICAgY29uc3QgcGxhY2VUb1JlbmRlciA9IGJsb2NrQ2FydC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydF9faXRlbScpO1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHBsYWNlVG9SZW5kZXIuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgbGV0IGFtb3VudCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5hbW91bnRHb29kJykudmFsdWU7XG4gICAgICAgIGxldCBwcmljZSA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19pdGVtX19wcmljZScpLmlubmVySFRNTDtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgYW1vdW50ICogcHJpY2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBSZWdGb3JtIGZyb20gJy4vUmVnRm9ybSc7XG5cbm5ldyBDYXJ0KCk7XG5uZXcgTGlzdCgpO1xuXG5uZXcgUmVnRm9ybSgpO1xuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHk+Lm1haW4tY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuaGVhZGVyLCBmb290ZXIge1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMxMzk4OUQ7Ki9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI0MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuaGVhZGVyPi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcblxcbmhlYWRlcj4uY29udGFpbmVyPm5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbmxpPmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubG9nb19faXRlbSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qKiAgR29vZHMgKioqL1xcblxcbi5nb29kcyB7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5nb29kc19faXRlbSB7XFxuICAgIHdpZHRoOiAyMyU7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuLmdvb2RzX19pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI4MHB4O1xcbn1cXG4uZ29vZHNfX2l0ZW0gaDM6aG92ZXIge1xcbiAgICBjb2xvcjogIzEzOTg5RDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxufVxcblxcbi5wcmljZSB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiAjZmYwMDAwO1xcbn1cXG5cXG4uYnRuQnV5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjOUQxODEzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMC44ZW0gMS4xZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ0bkJ1eTpob3ZlciB7XFxuICAgIGJvcmRlcjogI2ZmZmZmZiBzb2xpZCAxcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcXG4gICAgLmdvb2RzIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxufVxcblxcbi8qIE1vZGFsICovXFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlIDBzO1xcbn1cXG4vKi5tb2RhbC5vcGVuLCovIC5tb2RhbC5jYXJ0Lm9wZW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5cXG4ubW9kYWxfYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLm1vZGFsX2NvbnRlbnQge1xcbiAgICBtaW4td2lkdGg6IDM3NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmYyO1xcblxcbn1cXG5cXG4uaGVhZGVyQ2FydCBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzEzOTg5RDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcbi5jYXJ0X19pdGVtX19kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5yZXN1bHRBbW91bnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMTBweCA0NXB4IDQ1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlc3VsdEFtb3VudCBwIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNhcnRfX2l0ZW0ge1xcbiAgICBtYXJnaW46IDEwcHggNDVweCAxMHB4IDQ1cHg7XFxufVxcblxcbi5hbW91bnRHb29kIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubWludXMsIC5wbHVzLCAuZGVsZXRlIHtcXG5cXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUQxODEzO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5YThiZjtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgIzk5YThiZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OWE4YmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcnRfX2l0ZW1fX3ByaWNlIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4vKioqKiBSZWdpc3RyYXRpb24gKioqKiovXFxuaDIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXJnaW46IDEzMHB4IGF1dG8gMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogIzEzOTg5RDtcXG59XFxuXFxuLmFsZXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWZmMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybT4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5mb3JtPmlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZC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SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keT4ubWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5oZWFkZXIsIGZvb3RlciB7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzEzOTg5RDsqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjQwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5oZWFkZXI+LmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuXFxuaGVhZGVyPi5jb250YWluZXI+bmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxubGk+YSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5sb2dvX19pdGVtIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyoqICBHb29kcyAqKiovXFxuXFxuLmdvb2RzIHtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmdvb2RzX19pdGVtIHtcXG4gICAgd2lkdGg6IDIzJTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG4uZ29vZHNfX2l0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjgwcHg7XFxufVxcbi5nb29kc19faXRlbSBoMzpob3ZlciB7XFxuICAgIGNvbG9yOiAjMTM5ODlEO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxufVxcblxcbi5idG5CdXkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICM5RDE4MTM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnRuQnV5OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAjZmZmZmZmIHNvbGlkIDFweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xcbiAgICAuZ29vZHMge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG59XFxuXFxuLyogTW9kYWwgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UgMHM7XFxufVxcbi8qLm1vZGFsLm9wZW4sKi8gLm1vZGFsLmNhcnQub3BlbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcblxcbi5tb2RhbF9ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4ubW9kYWxfY29udGVudCB7XFxuICAgIG1pbi13aWR0aDogMzc1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVmZjI7XFxuXFxufVxcblxcbi5oZWFkZXJDYXJ0IGgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMTM5ODlEO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FydF9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG59XFxuXFxuLmNhcnRfX2l0ZW1fX2Rlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnJlc3VsdEFtb3VudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAxMHB4IDQ1cHggNDVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVzdWx0QW1vdW50IHAge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uY2FydF9faXRlbSB7XFxuICAgIG1hcmdpbjogMTBweCA0NXB4IDEwcHggNDVweDtcXG59XFxuXFxuLmFtb3VudEdvb2Qge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5taW51cywgLnBsdXMsIC5kZWxldGUge1xcblxcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RDE4MTM7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTlhOGJmO1xcbiAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCAjOTlhOGJmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5YThiZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FydF9faXRlbV9fcHJpY2Uge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi8qKioqIFJlZ2lzdHJhdGlvbiAqKioqKi9cXG5oMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1hcmdpbjogMTMwcHggYXV0byAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjMTM5ODlEO1xcbn1cXG5cXG4uYWxlcnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtPioge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLmZvcm0+aW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9