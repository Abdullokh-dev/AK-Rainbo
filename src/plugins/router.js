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
    }
  ]
})

export default router
