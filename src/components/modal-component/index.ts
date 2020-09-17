import ModalComponent from "./ModalComponent.vue";

// @ts-ignore
ModalComponent.install = Vue => {
  Vue.component(ModalComponent.name, ModalComponent);
};

export default ModalComponent;
