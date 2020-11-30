import GoodItem from './GoodItem';

export default class List {
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