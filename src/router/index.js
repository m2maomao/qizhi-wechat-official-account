import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Intro from '../views/Intro.vue'
import Honor from '../views/Honor.vue'
import Environment from '../views/Environment.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/honor',
    name: 'Honor',
    component: Honor
  },
  {
    path: '/environment',
    name: 'Environment',
    component: Environment
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
