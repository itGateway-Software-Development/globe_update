import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/components/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/modules/home/views/HomePage.vue')
      },
      {
        path: '/career',
        name: 'Career',
        component: () => import('@/modules/career/views/CareerPage.vue')
      },
      {
        path: '/career-detail/:position/:id',
        name: 'CareerDetail',
        component: () => import('@/modules/career/views/CareerDetailPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
