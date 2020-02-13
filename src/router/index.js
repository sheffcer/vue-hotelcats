import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Rooms from '../views/Rooms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rooms',
    name: 'rooms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rooms.vue')
  },
  {
    path: '/rooms/:Pid',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
