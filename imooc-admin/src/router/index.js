import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router
