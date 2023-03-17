import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/contennt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../views/login.vue')
    },
    {
      path: '/registrasi',
      name: 'regist',
      component: ()=>import('../views/regist.vue')
    },
    
  ]
})

export default router
