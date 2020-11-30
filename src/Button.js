import calculateAmount from "./index";
import {listGoods} from './globals';

export default class Button {
    text = '';
    cartList = [];
    classBtn = '';
    input = '';
    id = '';

    constructor(text, classBtn, id, input) {
        this.cartList = listGoods;
        this.text = text;
        this.classBtn = classBtn;
        this.id = id;
        this.input = input;
    }

    btnOnClick () {
        new Promise(resolve => {
            resolve(calculateAmount());
        }).then(result => {
            let divResult = document.querySelector('.res');
            divResult.innerHTML = result;
        });
    }

    render () {
        let btn = document.createElement('button');
        btn.classList.add(this.classBtn);
        btn.innerHTML = this.text;
        btn.addEventListener('click', () => {
            this.btnOnClick(this.id, this.input);
        });
        return btn;
    }
}