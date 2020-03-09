import Vue from 'vue';
// import VueRouter from 'vue-router'
// import $ from 'jquery';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
