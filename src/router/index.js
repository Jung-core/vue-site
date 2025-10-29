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
  history: createWebHistory(),
  routes
});

export default router; 