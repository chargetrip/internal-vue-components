import CheckboxTreeList from "./CheckboxTreeList.vue";

// @ts-ignore
CheckboxTreeList.install = Vue => {
  Vue.component(CheckboxTreeList.name, CheckboxTreeList);
};

export default CheckboxTreeList;
