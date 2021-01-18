import ActionBar from "./ActionBar.vue";

// @ts-ignore
ActionBar.install = Vue => {
  Vue.component(ActionBar.name, ActionBar);
};

export default ActionBar;
