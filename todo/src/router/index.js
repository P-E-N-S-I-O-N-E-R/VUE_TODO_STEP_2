import { createRouter, createWebHistory } from 'vue-router'
import Home_Page from '../components/index.vue'
import Todo_One from '../components/Todo_One'
import Todo_Two from '../components/Todo_Two'

const routes = [
  {
    path: '/',
    name: 'back',
    component: Home_Page
  },
  {
    path: '/ListOne',
    name: 'First',
    component: Todo_One
  },
  {
    path: '/ListTwo',
    name: 'Second',
    component: Todo_Two
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})

export default router
