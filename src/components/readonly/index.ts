import Readonly from "./Readonly.vue";

// @ts-ignore
Readonly.install = Vue => {
  Vue.component(Readonly.name, Readonly);
};

export default Readonly;
