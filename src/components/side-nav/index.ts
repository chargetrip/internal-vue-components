import SideNav from "./SideNav.vue";

// @ts-ignore
SideNav.install = Vue => {
  Vue.component(SideNav.name, SideNav);
};

export default SideNav;
