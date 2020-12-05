import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/User/Profile.vue'
import SignIn from '../views/User/SignIn.vue'
import SignUp from '../views/User/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
    {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
    {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
    {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
