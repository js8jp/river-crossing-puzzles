// Composables
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Default from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'
import List from '@/views/List.vue'
import Scene from '@/views/Scene.vue'
import Search from '@/views/Search.vue'

const routes: Array<RouteRecordRaw> = [{
  path: '/',
  redirect: '/home',
  component: Default,
  children: [{
    path: '/home',
    component: Home,
  }, {
    path: '/:id(\\d+)',
    component: Scene,
  }, {
    path: '/:id(\\d+)/search',
    component: Search,
  }, {
    path: '/list',
    component: List,
  }]
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
