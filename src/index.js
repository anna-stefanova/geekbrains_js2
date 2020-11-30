import './styles.css';

export default function calculateAmount() {
    const blockCart = document.querySelector('.modal_content.cart');
    const placeToRender = blockCart.querySelectorAll('.cart__item');
    let result = 0;
    placeToRender.forEach((block) => {
        let amount = block.querySelector('.amountGood').value;
        let price = block.querySelector('.cart__item__price').innerHTML;
        result = result + amount * price;
    });
    return result;
}


import Cart from './Cart';
import List from './List';
import RegForm from './RegForm';

new Cart();
new List();

new RegForm();


