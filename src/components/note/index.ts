import Note from "./Note.vue";

// @ts-ignore
Note.install = Vue => {
  Vue.component(Note.name, Note);
};

export default Note;
