import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../pages/Home.vue"
import HomePod from "../pages/HomePod.vue"
import Nozzles from "../pages/Nozzles.vue"
import YandexStation from "../pages/YandexStation.vue"
import GamePads from "../pages/GamePads.vue"

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Home,
      component: Home
    },
    {
      path: '/home-pod',
      name: HomePod,
      component: HomePod
    },
    {
      path: '/nozzles',
      name: Nozzles,
      component: Nozzles
    },
    {
      path: '/yandex-station',
      name: YandexStation,
      component: YandexStation
    },
    {
      path: '/gamepads',
      name: GamePads,
      component: GamePads
    },
    {
      path: '/:pathMatch(.*)*',
      component: Home
    }
  ]
})

export default router
