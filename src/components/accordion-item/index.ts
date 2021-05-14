import AccordionItem from "./AccordionItem.vue";

// @ts-ignore
AccordionItem.install = Vue => {
  Vue.component(AccordionItem.name, AccordionItem);
};

export default AccordionItem;
