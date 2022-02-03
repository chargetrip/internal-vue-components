import MaskedInput from "./MaskedInput.vue";

// @ts-ignore
MaskedInput.install = Vue => {
  Vue.component(MaskedInput.name, MaskedInput);
};

export default MaskedInput;
