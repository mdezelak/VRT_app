import Vue from "vue";
import VueRouter from "vue-router";
// import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/prijava",
    name: "prijava",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/nastavitve",
    name: "Nastavitve",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
  },
  {
    path: "/vizualizacija",
    name: "Vizualizacija",
    props: (route) => ({ file_id: parseInt(route.query.q) }),
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/aktivnosti",
    name: "Aktivnosti",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ActivityList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
