import Vue from 'vue';
import App from '../app.vue';
import store from './store';
import router from './router';
import '../views';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('[data-behavior="vue"]');
});
