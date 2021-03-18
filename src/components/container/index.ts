import Container from "./Container.vue";
// @ts-ignore
Container.install = Vue => {
  Vue.component(Container.name, Container);
};

export default Container;
