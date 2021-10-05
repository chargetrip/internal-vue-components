import MultiFileUpload from "./MultiFileUpload.vue";

// @ts-ignore
MultiFileUpload.install = Vue => {
  Vue.component(MultiFileUpload.name, MultiFileUpload);
};

export default MultiFileUpload;
