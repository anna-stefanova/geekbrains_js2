class List {
    items = [];

    constructor() {
        let goods = this.fetchGoods();
        goods = goods.map((cur, index) => {
           return new GoodItem(cur, index);
        });
        this.items.push(...goods);
        this.render();

        new Button('Купить');
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
        console.log(goods);
        goods = goods.map(cur => {
            return new CartItem(cur);
        });
        this.items.push(...goods);
        this.render();
        new BtnMinus('-');
        new BtnPlus('+');

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
            block.setAttribute('id', this.id);
            placeToRender.append(block);

            const description = document.createElement('div');
            description.classList.add('cart__item__description');
            block.append(description);


            const title = document.createElement('h3');
            title.classList.add('cart__item__title');
            title.innerHTML = `${this.name}`;
            description.append(title);

            const price = document.createElement('p');
            price.classList.add('cart__item__price');
            price.innerHTML = `${this.price}$`;
            description.append(price);

            const amount = document.createElement('div');
            amount.classList.add('amount');
            block.append(amount);

            const inputAmount = document.createElement('input');
            inputAmount.classList.add('amountGood');
            inputAmount.value = String(this.count);
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

    constructor(text) {
        this.text = text;
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
                btn.classList.add('btnBuy');
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

class BtnMinus {
    text = '';

    constructor(text) {
        this.text = text;
        this.render();
    }

    btnOnClick (id, input) {
        if (input.value > 0) {
            input.value--;
        }
        if (input.value === 0) {
        }
        listGoods.forEach((obj) => {
            if (id === obj.id) {
                obj.count = input.value;
            }
        });

    }

    render () {
        let placeToRender = document.querySelectorAll('.cart__item');
        if (placeToRender) {

            placeToRender.forEach((elem) => {
                let id = elem.getAttribute('id');
                let amount = elem.querySelector('.amount')
                let input = amount.querySelector('.amountGood');
                const btn = document.createElement('button');
                btn.classList.add('minus');
                btn.innerHTML = this.text;
                amount.prepend(btn);
                btn.addEventListener('click', () => {
                    this.btnOnClick(id, input);
                });
            })
        }
    }
}

class BtnPlus {
    text = '';

    constructor(text) {
        this.text = text;
        this.render();
    }

    btnOnClick (id, input) {
        input.value++;
        listGoods.forEach((obj) => {
            if (id === obj.id) {
                obj.count = input.value;
            }
        });
    }

    render () {
        let placeToRender = document.querySelectorAll('.cart__item');
        if (placeToRender) {
            placeToRender.forEach((elem) => {
                let id = elem.getAttribute('id');
                let amount = elem.querySelector('.amount');
                let input = amount.querySelector('.amountGood');
                const btn = document.createElement('button');
                btn.classList.add('plus');
                btn.innerHTML = this.text;
                amount.append(btn);
                btn.addEventListener('click', () => {
                    this.btnOnClick(id, input);
                });
            })
        }
    }
}

class BtnDelete {

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
