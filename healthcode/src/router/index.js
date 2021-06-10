import Vue from 'vue'
import VueRouter from 'vue-router'
import Addinf from '../views/Addinf.vue'

import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Me from '../views/Me.vue'
import Article from '../views/Article.vue'
import Verification from '../views/Verification.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Addinf',
    component: Addinf
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
 
  {
    path: '/verification',
    name: 'Verification',
    component: Verification
  },
  {
    path: '/success',
    name: 'Success',
    component: Verification
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
