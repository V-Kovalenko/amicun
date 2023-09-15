import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage, name: 'HomePage'},
    {path: '/work', component: () => import('@/components/Work.vue') , name: 'Work'},
    {path: '/email', component: () => import('@/components/Messages.vue'), name: 'Message'},
    {path: '/education', component: () => import('@/components/Education.vue'), name: 'Education'},
    {path: '/achievements', component: () => import('@/components/Achievements.vue'), name: 'Achievements'},
  ]
})

export default router
