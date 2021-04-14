import Label from "./Label.vue";

// @ts-ignore
Label.install = Vue => {
  Vue.component(Label.name, Label);
};

export default Label;
