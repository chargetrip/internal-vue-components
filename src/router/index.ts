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
      name: "wildcard"
    }
  ]
});

export default router;
