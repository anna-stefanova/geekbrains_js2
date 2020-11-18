class List {
    items = [];

    constructor() {
        let goods = this.fetchGoods();
        goods = goods.map((cur, index) => {
           return new GoodItem(cur, index);
        });
        this.items.push(...goods);
        this.render();

        new BtnBuy('Купить', 'btnBuy');
    }

    fetchGoods () {



        return [
            { name: 'Shirt', price: 150 },
            { name: 'Socks', price: 15 },
            { name: 'Jacket', price: 50 },
            { name: 'Shoes', price: 1500}
        ]
    }

    render () {
        this.items.forEach((good) => {
            good.render();
        })
    }
}



class Cart {
    items = [];


    constructor() {
        let goods = this.fetchGoods();
        goods = goods.map(cur => {
            return new CartItem(cur);
        });
        this.items.push(...goods);
        this.render();
        new BtnMinus('-', 'minus');
        new BtnPlus('+', 'plus');
        new BtnDelete('x', 'delete')
        let blockResult = document.querySelector('.resultAmount');
        if (blockResult) blockResult.remove();
        new BlockResult();

    }

    fetchGoods () {
        return listGoods;
    }


    render () {
        this.items.forEach((good) => {
            good.render();
        })
    }


}

class CartItem {
    id = '';
    name = '';
    price = 0;
    count = 0;

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
            placeToRender.append(block);

            const description = document.createElement('div');
            description.classList.add('cart__item__description');
            block.append(description);


            const title = document.createElement('h3');
            title.classList.add('cart__item__title');
            title.innerHTML = `${this.name}`;
            description.append(title);

            const price = document.createElement('div');
            price.classList.add('cart__item__price');
            price.innerHTML = `${this.price}`;
            block.append(price);

            const amount = document.createElement('div');
            amount.classList.add('amount');
            block.append(amount);

            const inputAmount = document.createElement('input');
            inputAmount.classList.add('amountGood');
            inputAmount.value = String(this.count);
            inputAmount.size = 3;
            amount.append(inputAmount);



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
        const placeToRender = document.querySelector('.goods');

        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('goods__item');
            block.setAttribute('id', this.id);
            placeToRender.append(block);

            const img = document.createElement('img');
            img.src = 'img/no-image.jpg';
            block.append(img);

            const description = document.createElement('div');
            description.classList.add('description');
            block.append(description);


            const title = document.createElement('h3');
            title.classList.add('title');
            title.innerHTML = `${this.name}`;
            description.prepend(title);

            const price = document.createElement('p');
            price.classList.add('price');
            price.innerHTML = `${this.price}`;
            description.append(price);

        }

    }
}


let listGoods = [];

class Button {
    text = '';
    constructor(text, classBtn) {
        this.text = text;
        this.classBtn = classBtn;
    }

    btnOnClick () {
        let result = calculateAmount();
        let divResult = document.querySelector('.res');
        divResult.innerHTML = result;
    }

    render () {
        let placeToRender = document.querySelectorAll('.cart__item');
        if (placeToRender) {

            placeToRender.forEach((elem) => {
                let id = elem.getAttribute('id');
                let amount = elem.querySelector('.amount')
                let input = amount.querySelector('.amountGood');
                const btn = document.createElement('button');
                btn.classList.add(this.classBtn);
                btn.innerHTML = this.text;
                amount.append(btn);
                btn.addEventListener('click', () => {
                    this.btnOnClick(id, input);
                });
            })
        }
    }
}

class BtnBuy extends Button {
    constructor(text, classBtn) {
        super(text, classBtn);
        this.render();
    }

    btnOnClick (id) {
        let good = document.getElementById(`${id}`);
        let name = good.querySelector('.title');
        name = name.innerHTML;
        let price = good.querySelector('.price');
        price = price.innerHTML;
        let count = '1';
        let cartItem = { id, name, price, count };


        if (listGoods.length) {
            let res = [];
            listGoods.forEach((obj) => {
                if (id === obj.id) {
                    obj.count++;
                    res.push(true);
                } else res.push(false);
            });
            if (!res.includes(true)) listGoods.push(cartItem);
        }
        if (listGoods.length === 0) {
            listGoods.push(cartItem);
        }
    }

    render () {
        let placeToRender = document.querySelectorAll('.goods__item');
        if (placeToRender) {
            placeToRender.forEach((elem) => {
                let id = elem.getAttribute('id');
                const btn = document.createElement('button');
                btn.classList.add(this.classBtn);
                btn.innerHTML = this.text;
                elem.append(btn);
                btn.addEventListener('click', () => {
                    this.btnOnClick(id);
                });
            })
        }
    }
}
new List();

class BtnMinus extends Button {

    constructor(text, classBtn) {
        super(text, classBtn);
        this.render();
    }

    btnOnClick (id, input) {
        if (input.value > 0) {
            input.value--;
        }
        if (input.value === '0') {
            let goodItem = document.getElementById(id);
            if (goodItem) goodItem.remove();
        }
        super.btnOnClick();

        listGoods.forEach((obj) => {
            if (id === '0' + obj.id) {
                obj.count = input.value;
            }
        });
    }

    render() {
        super.render();
    }
}

class BtnPlus extends Button {

    constructor(text, classBtn) {
        super(text, classBtn);
        this.render();
    }

    btnOnClick (id, input) {
        input.value++;

        super.btnOnClick();

        listGoods.forEach((obj) => {
            if (id === '0' + obj.id) {
                obj.count = input.value;
            }
        });
    }

    render() {
        super.render();
    }
}

class BtnDelete extends Button {
    constructor(text, classBtn) {
        super(text, classBtn);
        this.render();
    }


    btnOnClick (id, input) {
        let goodItem = document.getElementById(id);
        if (goodItem) goodItem.remove();
        input.value = 0;
        listGoods.forEach((obj) => {
            if (id === ('0' + obj.id)) {
                obj.count = input.value;
            }
        });
        super.btnOnClick();
        console.log(listGoods);
    }

    render() {
        super.render();
    }
}

class BlockResult {
    constructor() {
        this.render();
    }

    render () {
        const blockCart = document.querySelector('.modal_content.cart');
        let result = calculateAmount();
        let divResult = document.createElement('div');
        divResult.classList.add('resultAmount');
        divResult.innerHTML = `<p>Итого</p><p class="res">${result}</p>`;
        blockCart.append(divResult);
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


let cart = document.querySelector('.hrefCart');
cart.addEventListener('click', (event) => {
    event.preventDefault();
    let cartList = document.querySelector('.modal.cart');
    cartList.classList.add('open');
    let contentCart = document.querySelector('.contentCart');
    contentCart.innerHTML = '';
    new Cart();
    let closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        cartList.classList.remove('open');
    })
});
