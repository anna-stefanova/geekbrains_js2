import calculateAmount from "./index";

export default class BlockResult {
    constructor() {
        this.render();
    }

    render () {
        return new Promise(resolve => {
            let result = calculateAmount();
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