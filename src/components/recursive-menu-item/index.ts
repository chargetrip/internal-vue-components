import RecursiveMenuItem from "./RecursiveRecursiveMenuItem.vue";

// @ts-ignore
RecursiveMenuItem.install = Vue => {
  Vue.component(RecursiveMenuItem.name, RecursiveMenuItem);
};

export default RecursiveMenuItem;
