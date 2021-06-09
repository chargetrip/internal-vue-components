import { addItem, removeItem } from "@/utilities/single-frame";
import { directiveInit, directivesMap } from "@/utilities/utilities";

const bindLazyLoad = (el, binding) => {
  const { id, item } = directiveInit(el);

  el.classList.add("lazy-load");

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

  if (el.classList.contains("loaded")) {
    el.removeAttribute("src");
    el.classList.remove("loaded");
  }

  addItem(el, callback);
  directivesMap.set(id, { ...item });
};

export default {
  inserted: bindLazyLoad,
  update: bindLazyLoad,
  unbind: removeItem
};
