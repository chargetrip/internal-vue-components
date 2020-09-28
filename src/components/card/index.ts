import Card from "./Card.vue";

// @ts-ignore
Card.install = Vue => {
  Vue.component(Card.name, Card);
};

export default Card;
