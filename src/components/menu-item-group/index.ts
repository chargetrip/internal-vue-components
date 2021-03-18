import RecursiveMenu from "./RecursiveMenu.vue";

// @ts-ignore
RecursiveMenu.install = Vue => {
  Vue.component(RecursiveMenu.name, RecursiveMenu);
};

export default RecursiveMenu;
