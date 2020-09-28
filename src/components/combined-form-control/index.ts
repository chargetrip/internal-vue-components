import CombinedFormControl from "./CombinedFormControl.vue";

// @ts-ignore
CombinedFormControl.install = Vue => {
  Vue.component(CombinedFormControl.name, CombinedFormControl);
};

export default CombinedFormControl;
