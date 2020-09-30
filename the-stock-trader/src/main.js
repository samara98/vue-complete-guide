import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueResource from 'vue-resource';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.config.productionTip = false;

Vue.use(VueResource);

// Vue.http.options.root = 'https://vuejs-stock-trader.firebaseio.com/';
// Vue.http.options.root = '';

Vue.filter('currency', (value) => `$${value.toLocalString()}`);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount('#app');
