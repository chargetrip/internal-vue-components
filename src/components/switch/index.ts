import Switch from "./Switch.vue";

// @ts-ignore
Switch.install = Vue => {
  Vue.component(Switch.name, Switch);
};

export default Switch;
