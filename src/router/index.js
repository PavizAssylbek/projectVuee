import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Like from "../views/Like.vue";
import About from "../views/About.vue";
import PhotoPage from "@/pages/PhotoPage";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/photo/:id",
    name: "PhotoPage",
    component: PhotoPage,
  },
  {
    path: "/like",
    name: "Like",
    component: Like,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
