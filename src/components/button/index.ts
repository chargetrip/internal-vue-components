import Button from "./Button.vue";

// @ts-ignore
Button.install = Vue => {
  Vue.component(Button.name, Button);
};

export default Button;
