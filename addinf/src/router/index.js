import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Addinf from '../views/Addinf.vue'
import Home from '../views/Home.vue'

//<<<<<<< HEAD
import { Button } from 'mint-ui';
import { Popup } from 'vant';   //弹出框
//=======

//>>>>>>> csl

Vue.use(VueRouter)
Vue.use(Vuex);
Vue.component(Button.name, Button);
Vue.use(Popup); //弹出框

const routes = [
  {
    path: '/',
    name: 'Addinf',
    component: Addinf
//<<<<<<< HEAD
  },
  {
      path: '/home',
      name: 'Home',
      component: Home
//=======
//>>>>>>> csl
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
