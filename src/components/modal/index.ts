import Modal from "./Modal.vue";

// @ts-ignore
ModalComponent.install = Vue => {
  Vue.component(Modal.name, Modal);
};

export default Modal;
