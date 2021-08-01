import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueIziToast);
export const bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
