import Button from './Button';

export default class BtnDelete extends Button {
    constructor(text, classBtn, id, input) {
        super(text, classBtn, id, input);
    }

    btnOnClick (id, input) {
        let goodItem = document.getElementById(id);
        if (goodItem) goodItem.remove();
        input.value = 0;

        this.cartList.forEach((obj) => {
            if (id === ('0' + obj.id)) {
                obj.count = input.value;
            }
        });
        return super.btnOnClick();
    }

    render() {
        return super.render();
    }
}