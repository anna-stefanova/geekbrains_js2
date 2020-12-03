import Button from './Button';
import {listGoods} from './globals';

export default class BtnBuy extends Button {

    constructor(text, classBtn, id) {
        super(text, classBtn, id);
    }

    add (cartItem) {
        if (this.cartList.length) {
            let res = [];
            this.cartList.forEach((obj) => {
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

    btnOnClick (id) {
        return new Promise(resolve => {
            let good = document.getElementById(`${id}`);
            let name = good.querySelector('.title');
            name = name.innerHTML;
            let price = good.querySelector('.price');
            price = price.innerHTML;
            let count = '1';
            let cartItem = { id, name, price, count };
            resolve(cartItem);
        }).then(cartItem => this.add(cartItem));
    }

    render () {
        return super.render();
    }
}