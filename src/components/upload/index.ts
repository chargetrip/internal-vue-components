import Upload from "./Upload.vue";

// @ts-ignore
Upload.install = Vue => {
  Vue.component(Upload.name, Upload);
};

export default Upload;
