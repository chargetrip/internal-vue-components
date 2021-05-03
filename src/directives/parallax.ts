import { directiveInit, directivesMap, unbind } from "../utilities/utilities";
import { intersector } from "../utilities/observer";
import { addItem, removeItem } from "../utilities/single-frame";

const bindParallax = (el, binding) => {
  const { id, item } = directiveInit(el);

  el.classList.add("parallax");

  const distancePercentage = binding?.value?.distancePercentage || 5;
  const distance = (window.innerHeight / 100) * distancePercentage;
  const difference = distance * 2;
  const isReversed = binding?.value?.isReversed || false;

  function setElementTranslate() {
    const rect = el.getBoundingClientRect();

    const decimal = (rect.top + rect.height / 2) / window.innerHeight - 0.5;

    el.style.transform = `translate(0, ${difference *
      decimal *
      (isReversed ? -1 : 1)}px)`;
  }

  const observer = intersector({
    el,
    onEnter: () => addItem(el, setElementTranslate),
    onLeave: () => removeItem(el)
  });

  directivesMap.set(id, { ...item, observer });
};

export default {
  inserted: bindParallax,
  update: bindParallax,
  unbind
};
