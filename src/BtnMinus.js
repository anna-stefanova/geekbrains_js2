import Button from './Button';

export default class BtnMinus extends Button {
    constructor(text, classBtn, id, input) {
        super(text, classBtn, id, input);
    }

    btnOnClick (id, input) {
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
            this.cartList.forEach((obj) => {
                if (id === ('0' + obj.id)) {
                    obj.count = input.value;
                }
            });
        }).then(() => {
            return super.btnOnClick();
        })
    }

    render () {
        return super.render();
    }
}