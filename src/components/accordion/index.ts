import Accordion from "./Accordion.vue";

// @ts-ignore
Accordion.install = Vue => {
  Vue.component(Accordion.name, Accordion);
};

export default Accordion;
