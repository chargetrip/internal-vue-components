import Radio from "./Radio.vue";

// @ts-ignore
Radio.install = Vue => {
  Vue.component(Radio.name, Radio);
};

export default Radio;
