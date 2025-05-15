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
        path: '/solar/:slug',
        name: 'Solar',
        component: () => import('@/modules/solar/views/SolarPage.vue')
      },
      {
        path: '/solar-product-detail/:slug',
        name: 'SolarProductDetail',
        component: () => import('@/modules/solar/views/ProductDetail.vue')
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
        path: '/cart',
        name: 'Cart',
        component: () => import('@/modules/cartCheckout/views/CartDetailPage.vue')
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/modules/cartCheckout/views/CheckoutPage.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/modules/profile/views/UserProfile.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/modules/auth/views/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/modules/auth/views/Register.vue')
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
