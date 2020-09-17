import Snackbar from "./Snackbar.vue";

// @ts-ignore
Snackbar.install = Vue => {
  Vue.component(Snackbar.name, Snackbar);
};

export default Snackbar;
