import { createWebHistory, createRouter } from "vue-router";
import HomeList from "./layouts/HomeList.vue";
import HomePage from "./pages/Home.vue";
import SearchPage from "./pages/Search.vue";
import DetailsPage from "./pages/Details.vue";

const routes = [
  {
    path: "/",
    component: HomeList,
    children: [
      {
        path: "/",
        component: HomePage,
      },
      {
        path: "/search",
        component: SearchPage,
      },
    ],
  },
  {
    path: "/details/:id",
    component: DetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
