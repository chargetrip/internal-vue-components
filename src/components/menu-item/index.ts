import MenuItem from "./MenuItem.vue";

// @ts-ignore
MenuItem.install = Vue => {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;
