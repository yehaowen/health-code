import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);

// 配置axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios = axios;

// 配置Moment
import moment from 'moment';
Vue.prototype.moment = moment;

// 配置MintUI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(MintUI);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
