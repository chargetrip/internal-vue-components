import FileUpload from "./FileUpload.vue";

// @ts-ignore
FileUpload.install = Vue => {
  Vue.component(FileUpload.name, FileUpload);
};

export default FileUpload;
