import Image from "./Image.vue";
// @ts-ignore
Image.install = Vue => {
  Vue.component(Image.name, Image);
};

export default Image;
