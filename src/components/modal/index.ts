import Modal from "./Modal.vue";

// @ts-ignore
Modal.install = Vue => {
  Vue.component(Modal.name, Modal);
};

export default Modal;
