
import BtnMinus from './BtnMinus';
import BtnPlus from './BtnPlus';
import BtnDelete from './BtnDelete';

export default class CartItem {
    id = '';
    name = '';
    price = 0;

    constructor({ id, name, price, count }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    render () {
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

            const AddBtnMinus = new BtnMinus('-', 'minus', `0${this.id}`, inputAmount);
            amount.append(AddBtnMinus.render());

            const AddBtnPlus = new BtnPlus('+', 'plus', `0${this.id}`, inputAmount);
            amount.append(AddBtnPlus.render());

            const AddBtnDelete = new BtnDelete('x', 'delete', `0${this.id}`, inputAmount);
            amount.append(AddBtnDelete.render());
        }
    }
}