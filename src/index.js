import Vue from 'vue';
import App from './App.vue';

import store from "./store";

new Vue({
    el: 'main',
    template: '<App/>',
    components: {
        App,
    },
    store,
});
