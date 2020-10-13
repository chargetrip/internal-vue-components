import Cell from "./Cell.vue";

// @ts-ignore
Cell.install = Vue => {
  Vue.component(Cell.name, Cell);
};

export default Cell;
