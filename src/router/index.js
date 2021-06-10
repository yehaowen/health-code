import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../testing/Header.vue'
import Button from '../testing/Button.vue'
import Field from '../testing/Field.vue'
import Navbar from '../testing/Navbar.vue'
import Tabbar from '../testing/Tabbar.vue'
import Shouye from '../testing/Shouye.vue'
import Gouwuche from '../testing/Gouwuche.vue'
import Wode from '../testing/Wode.vue'
import Swipe from '../testing/Swipe.vue'
import Infinite from '../testing/Infinite.vue'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Me from '../views/Me.vue'
import Article from '../views/Article.vue'
import Verification from '../views/Verification.vue'
import Success from '../views/Success.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/infinite',
    name: 'Infinite',
    component: Infinite
  },
  {
    path: '/swipe',
    name: 'Swipe',
    component: Swipe
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/shouye',
    name: 'Shouye',
    component: Shouye
  },
  {
    path: '/gouwuche',
    name: 'Gouwuche',
    component: Gouwuche
  },
  {
    path: '/wode',
    name: 'Wode',
    component: Wode
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: Tabbar
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
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
    path: '/field',
    name: 'Field',
    component: Field
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
