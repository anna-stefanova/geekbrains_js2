let listGoods = [];

class List {
    items = [];

    constructor() {
        let goodsPromise = this.fetchGoods();
        goodsPromise.then(() => {
            this.render();

        })
    }

    fetchGoods () {
        const result = fetch('database.json');
        return result
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.items = data.data.map((cur, index) => {
                    return new GoodItem(cur, index);
                });
            })
    }

    render () {
        this.items.forEach((good) => {
            good.render();
        })
    }
}



class Cart {
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

new Cart();

class CartItem {
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

class GoodItem {
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


class Button {
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

class BtnMinus extends Button {
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

class BtnPlus extends Button {
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

class BtnDelete extends Button {
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

class BtnBuy extends Button {

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
new List();

class BlockResult {
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

const calculateAmount = () => {

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



