import Table from "./Table.vue";

// @ts-ignore
Table.install = Vue => {
  Vue.component(Table.name, Table);
};

export default Table;
