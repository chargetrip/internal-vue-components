import QuickNav from "./QuickNav.vue";

// @ts-ignore
QuickNav.install = Vue => {
  Vue.component(QuickNav.name, QuickNav);
};

export default QuickNav;
