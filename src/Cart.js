import {listGoods} from './globals';
import CartItem from './CartItem';
import BlockResult from './BlockResult';

export default class Cart {
    items = [];
    cartList = [];

    constructor() {
        this.init();
    }

    init () {

        let cart = document.querySelector('.hrefCart');
        cart.addEventListener('click', (event) => {
            event.preventDefault();

            let cartList = document.querySelector('.modal.cart');
            cartList.classList.add('open');
            let contentCart = document.querySelector('.contentCart');
            contentCart.innerHTML = '';

            let goods = this.fetchGoods();
            goods = goods.map(cur => {
                return new CartItem(cur);
            });
            this.items = goods;
            this.render();

            let blockResult = document.querySelector('.resultAmount');
            if (blockResult) blockResult.remove();
            new BlockResult();

            let closeBtn = document.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                cartList.classList.remove('open');
            });
        });
    }

    fetchGoods () {
        this.cartList = listGoods;

        this.cartList = this.cartList.filter(obj => obj.count > 0);

        return this.cartList;
    }

    render () {
        this.items.forEach((good) => {
            good.render();
        });

    }
}