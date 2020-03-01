import Vue from 'vue';
// import VueRouter from 'vue-router'
// import $ from 'jquery';
import App from './App.vue';
import './registerServiceWorker';


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
