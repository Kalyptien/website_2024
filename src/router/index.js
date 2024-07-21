import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/curriculum",
    name: "curriculum",
    component: () =>
      import("../views/CurriculumView.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import("../views/PortfolioView.vue"),
  },
  {
    path: "/projet",
    name: "projet",
    component: () =>
      import("../views/ProjetView.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
