import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Popup);
Vue.use(ElementUI);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

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

// 配置ElementUI
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
