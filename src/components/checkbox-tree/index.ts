import CheckboxTree from "./CheckboxTree.vue";

// @ts-ignore
CheckboxTree.install = Vue => {
  Vue.component(CheckboxTree.name, CheckboxTree);
};

export default CheckboxTree;
