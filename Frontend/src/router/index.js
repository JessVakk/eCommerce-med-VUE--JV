import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MyProfile from '../views/MyProfile.vue'
import store from '../store/index'

const requireAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn
  if(!loggedIn) next({ name: 'login' , query: { redirect: to.fullPath }})
  else next()
}


const requireNoAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn
  if(loggedIn) next({ name: 'home' })
  else next()
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myprofile',
    name: 'myProfile',
    component: MyProfile,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: requireNoAuth
  },
  {
  path: '/register',
  name: 'register',
  component: RegisterView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/details/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
