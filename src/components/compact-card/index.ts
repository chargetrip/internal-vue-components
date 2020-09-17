import CompactCard from "./CompactCard.vue";
// @ts-ignore
CompactCard.install = Vue => {
  Vue.component(CompactCard.name, CompactCard);
};

export default CompactCard;
