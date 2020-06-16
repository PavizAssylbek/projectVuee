import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Like from "../views/Like.vue";
import PhotoPage from "@/pages/PhotoPage";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    /* children: [
      {
        path: '/car',
        name: 'Car',
        component: () => import("../views/Car.vue")
      }
    ]
    */
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
