/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomeAI from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeAI',
    component: HomeAI
  },
  {
    path: '/about',
    name: 'AboutAI',
    // Carga perezosa para optimizar el rendimiento
    component: () => import('@/views/AboutAI.vue')
  },
  {
    path: '/ai-call',
    name: 'AICall',
    component: () => import('@/views/AICall.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Siempre vuelve al inicio cuando se cambia de página
    return { top: 0 }
  }
})

export default router