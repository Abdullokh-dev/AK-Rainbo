import {createRouter, createWebHistory} from 'vue-router'
import Home from "../pages/Home.vue"

const router = createRouter({
  history: createWebHistory(),
  // mode: 'history',
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: import('../pages/HomePod.vue')
    },
    {
      path: '/nozzles',
      component: import('../pages/Nozzles.vue')
    },
    {
      path: '/yandex-station',
      component: import('../pages/YandexStation.vue')
    }
  ]
})

export default router
