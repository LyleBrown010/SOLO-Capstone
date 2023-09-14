import { createRouter, createWebHistory } from 'vue-router'
import {useCookies} from "vue3-cookies";
const {cookies} = useCookies();
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePageView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsPageView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactPageView.vue')
  },
  {
    path: '/product/:prodID',
    name: 'single product',
    component: () => import('../views/SingleProductView.vue')
  },
  {
    path: '/register',
    name: 'register', 
    component: () => import('../views/RegisterView.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  }, 
  {
    path: '/logout',
    name: 'logout',
    beforeEnter() {
      localStorage.removeItem('setToken')
      localStorage.removeItem('user')
      cookies.remove("AuthenticatedUser")
      // window.location.reload()
      router.push({name: 'login'})
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/userProfileView.vue')
  },
  {
    path: '/checkout', 
    name: 'checkout', 
    component: () => import('../components/CheckoutComp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
