import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      isLogin: false
    },
    component: () => import('../views/About.vue')
  },{
    path: '/signin',
    name: 'signin',
    
    component: () => import('../views/Signin.vue')
  },{
    path: '/detail/:id',
    name: 'detail',
    meta: {
      isLogin: false
    },
    component: () => import('../views/Detail.vue')
  },{
    path: '/article',
    name: 'article',
    meta: {
      isLogin: true
    },
    component: () => import('../views/Article.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  console.log('to',to.meta)
  console.log('from',from)
  if (to.meta.isLogin) {
    next({ name: 'signin' })
  }
  next()
})
export default router
