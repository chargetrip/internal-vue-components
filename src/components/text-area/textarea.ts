import TextArea from "./TextArea.vue";

// @ts-ignore
TextArea.install = Vue => {
  Vue.component(TextArea.name, TextArea);
};

export default TextArea;
