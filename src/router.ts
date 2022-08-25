import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./pages/Home.vue";
import SearchPage from "./pages/Search.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
