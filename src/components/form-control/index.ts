import FormControl from "./FormControl.vue";

// @ts-ignore
FormControl.install = Vue => {
  Vue.component(FormControl.name, FormControl);
};

export default FormControl;
