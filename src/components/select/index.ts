import Select from "./Select.vue";

// @ts-ignore
Select.install = Vue => {
  Vue.component(Select.name, Select);
};

export default Select;
