import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../pages/Home.vue"
import HomePod from "../pages/HomePod.vue"
import Nozzles from "../pages/Nozzles.vue"
import YandexStation from "../pages/YandexStation.vue"

const router = createRouter({
  history: createWebHashHistory(),
  // mode: 'history',
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: HomePod
    },
    {
      path: '/nozzles',
      component: Nozzles
    },
    {
      path: '/yandex-station',
      component: YandexStation
    }
  ]
})

export default router
