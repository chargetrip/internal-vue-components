import TopNav from "./TopNav.vue";

// @ts-ignore
TopNav.install = Vue => {
  Vue.component(TopNav.name, TopNav);
};

export default TopNav;
