import RadioTree from "./RadioTree.vue";

// @ts-ignore
RadioTree.install = Vue => {
  Vue.component(RadioTree.name, RadioTree);
};

export default RadioTree;
