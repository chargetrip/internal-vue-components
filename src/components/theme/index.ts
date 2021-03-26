import Theme from "./Theme.vue";

// @ts-ignore
Theme.install = Vue => {
  Vue.component(Theme.name, Theme);
};

export default Theme;
