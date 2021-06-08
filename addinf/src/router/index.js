import Vue from 'vue'
import VueRouter from 'vue-router'
import Addinf from '../views/Addinf.vue'
import Yimiao from '../views/Yimiao.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Addinf',
    component: Addinf
  },{
    path: '/yimiao',
    name: 'Yimiao',
    component: Yimiao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
