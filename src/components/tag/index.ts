import Tag from "./Tag.vue";

// @ts-ignore
Tag.install = Vue => {
  Vue.component(Tag.name, Tag);
};

export default Tag;
