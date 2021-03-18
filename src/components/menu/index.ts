import Menu from "./Menu.vue";

// @ts-ignore
Menu.install = Vue => {
  Vue.component(Menu.name, Menu);
};

export default Menu;
