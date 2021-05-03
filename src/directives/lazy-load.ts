import { addItem, removeItem } from "../utilities/single-frame";

export default {
  inserted: (el, binding) => {
    function callback() {
      if (el.getBoundingClientRect().top - window.innerHeight * 1.5 < 0) {
        if (binding.value.isImage) {
          const img = new Image();

          img.onload = () => {
            el.setAttribute("src", binding.value.src);
            el.classList.add("loaded");
          };

          img.src = binding.value.src;
        } else {
          el.setAttribute("src", binding.value.src);
          el.classList.add("loaded");
        }
        removeItem(el);
      }
    }

    addItem(el, callback);
  },
  unbind: removeItem
};
