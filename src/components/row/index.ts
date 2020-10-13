import Row from "./Row.vue";

// @ts-ignore
Row.install = Vue => {
  Vue.component(Row.name, Row);
};

export default Row;
