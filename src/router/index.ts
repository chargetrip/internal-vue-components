import Vue from "vue";
import VueRouter from "vue-router";
import Alert from "../components/alert/Alert.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: Alert,
      name: "nada1"
    },
    {
      path: "/*",
      component: Alert,
      name: "nada2"
    },
    {
      path: "/:test1",
      component: Alert,
      name: "nada3"
    },
    {
      path: "/:test1/:test2",
      component: Alert,
      name: "nada4"
    },
    {
      path: "/:test1/:test2/:test3",
      component: Alert,
      name: "nada5"
    }
  ]
});

export default router;
