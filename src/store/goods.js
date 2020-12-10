const state = {
    data: {},
    itemsOnPage: [],
    itemsInCart: [],
    statusCart: false,
    totalInCart: 0,

};

const getters = {
    getData: state => state.data,
    getItemsOnPage: state => state.itemsOnPage,
    getItemsInCart: state => state.itemsInCart,
    getStatusCart: state => state.statusCart,
    getTotalInCart: state => state.totalInCart,
};

const actions = {
    requestData ({ commit }, page = 1) {
        if (!page) {
            return;
        }

        return fetch(`/itemslist/${page}`, {
            method: 'GET'
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            commit('setData', data);
        });
    },
    addInCart ({state, commit}, id) {
        commit('addInCart', id);
    },
    minusCount({ state, commit }, id) {
        commit('minusCount', id);
    },
    deleteCount({ state, commit }, id) {
        commit('deleteCount', id);
    },
    plusCount({ state, commit }, id) {
        commit('plusCount', id);
    },
    calcResult({ commit }) {
        commit('calcResult')
    },
    addItem({ state, commit }, data) {
        fetch('/itemslist', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res)
            });
    },

    changeStatusCart({ commit }) {
        commit('changeStatusCart');
    },
};

const mutations = {
    setData(state, newData) {
        state.data = { ...state.data, ...newData};
        state.itemsOnPage.push(...Object.keys(newData));
    },
    addInCart(state, id) {

        if (state.itemsInCart.length) {
            if (state.itemsInCart.includes(id)) {
                state.data[id].count++;
            } else {
                state.data[id].count = 1;
                state.itemsInCart.push(id);
            }
        }
        if (state.itemsInCart.length === 0) {
            state.data[id].count = 1;
            state.itemsInCart.push(id);
        }
    },
    changeStatusCart(state) {
        state.statusCart = !state.statusCart;
    },

    minusCount (state, id) {
        state.data[id].count--;

    },
    deleteCount(state, id) {
        state.data[id].count = 0;
        let indexElem = state.itemsInCart.indexOf(id);
        state.itemsInCart.splice(indexElem, 1);
    },
    plusCount (state, id) {
        state.data[id].count++;
    },

    calcResult(state) {
        state.totalInCart = 0;
        state.itemsInCart.forEach(id => {
            const res = state.data[id].count * state.data[id].price;
            state.totalInCart = state.totalInCart + res;
        });

    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}