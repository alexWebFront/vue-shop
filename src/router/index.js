import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
