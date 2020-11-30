import Button from './Button';

export default class BtnPlus extends Button {
    constructor(text, classBtn, id, input) {
        super(text, classBtn, id, input);
    }

    btnOnClick (id, input) {
        const sum = new Promise(resolve => {
            input.value++;
            resolve();
        });
        sum.then(() => {
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