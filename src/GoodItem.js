
import BtnBuy from './BtnBuy';

export default class GoodItem {
    name = '';
    price = 0;

    constructor({ name, price }, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    render () {

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
        }).then((block) => {
            const AddBtnBuy = new BtnBuy('Купить', 'btnBuy', this.id);
            block.append(AddBtnBuy.render());
        });

    }
}