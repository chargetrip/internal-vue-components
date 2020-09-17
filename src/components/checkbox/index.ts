import Checkbox from "./Checkbox.vue";

// @ts-ignore
Checkbox.install = Vue => {
  Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;
