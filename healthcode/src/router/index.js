import Vue from 'vue'
import VueRouter from 'vue-router'
import Addinf from '../views/Addinf.vue'
import Detailed from '../views/Detailed.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Mypart from '../views/Mypart.vue'
import Register from '../views/Register.vue'
import Success from '../views/Success.vue'
import Verification from '../views/Verification.vue'

import MintUI from 'mint-ui'
import { Popup } from 'vant';

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(Popup);
 

const routes = [ 
  {
    path: '/addinf',
    name: 'Addinf',
    component: Addinf
  },
  {
    path: '/detailed',
    name: 'Detailed',
    component: Detailed
  },
		{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mypart',
    name: 'Mypart',
    component: Mypart
  },
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification
 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
