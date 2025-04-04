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
        path: '/xp-pen/:slug',
        name: 'XpPen',
        component: () => import('@/modules/xppen/views/XpPenPage.vue')
      },
      {
        path: '/xp-pen-detail/:slug',
        name: 'XpPenDetail',
        component: () => import('@/modules/xppen/views/XpPenDetailPage.vue')
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
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/components/common/NotFound.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
