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
        path: '/category/:slug',
        name: 'Category',
        component: () => import('@/modules/category/views/CategoryPage.vue')
      },
      {
        path: '/adreamer/:slug',
        name: 'Adreamer',
        component: () => import('@/modules/adreamer/views/AdreamerPage.vue')
      },
      {
        path: '/adreamer-product-detail/:slug',
        name: 'AdreamerProductDetail',
        component: () => import('@/modules/adreamer/views/ProductDetail.vue')
      },
      {
        path: '/product-detail/:slug',
        name: 'ProductDetail',
        component: () => import('@/modules/category/views/ProductDetail.vue')
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
        path: '/contact-us',
        name: 'ContactUs',
        component: () => import('@/modules/aboutus/views/ContactUs.vue')
      },
      {
        path: '/about-us',
        name: 'AboutUs',
        component: () => import('@/modules/aboutus/views/AboutUs.vue')
      },
      {
        path: '/partners',
        name: 'Partners',
        component: () => import('@/modules/partner/views/PartnerPage.vue')
      },
      {
        path: '/promotions',
        name: 'Promotions',
        component: () => import('@/modules/promotion/views/PromotionPage.vue')
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
