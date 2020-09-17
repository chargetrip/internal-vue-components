import Duo from "./Duo.vue";

// @ts-ignore
Duo.install = Vue => {
  Vue.component(Duo.name, Duo);
};

export default Duo;
