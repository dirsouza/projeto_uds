import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Catalogo from '@/views/Catalogo.vue'
import Sacola from '@/views/Sacola.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Catalogo',
    component: Catalogo
  },
  {
    path: '/sacola',
    name: 'Sacola',
    component: Sacola
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
