import Radio from "./Radio.vue";

// @ts-ignore
MonthInput.install = Vue => {
  Vue.component(Radio.name, Radio);
};

export default Radio;
