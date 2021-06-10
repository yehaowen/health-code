import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Checkbox, CheckboxGroup } from 'vant';
import { Popup } from 'vant';   //弹出框
import 'vant/lib/index.css';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(Popup); //弹出框
Vue.config.productionTip = false

// 配置axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios = axios;

// 配置Moment
import moment from 'moment';
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
