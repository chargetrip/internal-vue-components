import CodeBlock from "./CodeBlock.vue";

// @ts-ignore
CodeBlock.install = Vue => {
  Vue.component(CodeBlock.name, CodeBlock);
};

export default CodeBlock;
