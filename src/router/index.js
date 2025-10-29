import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import List from '@/views/List.vue';

const routes = [
  {
    path: "/list",
    component: List
  },
  {
    path: "/",
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory('/vue-site/'), // ✅ 여기를 배포 경로로
  routes
});

export default router; 