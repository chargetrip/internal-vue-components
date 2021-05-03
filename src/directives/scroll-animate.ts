import {
  directiveInit,
  directivesMap,
  easings,
  isInKeyframe,
  normalizedDecimal,
  unbind
} from "@/utilities/utilities";
import { intersector } from "@/utilities/observer";
import { addItem, removeItem } from "@/utilities/single-frame";

const transformKeys = {
  scaleX: 1,
  skewY: 0,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0
};

const bindScrollAnimate = (el, binding) => {
  const { id, item } = directiveInit(el);

  if (binding?.value?.prevent) return;

  el.classList.add("scroll-animate");

  let keyframes = binding?.value?.keyframes || [];

  keyframes = keyframes.map(item => {
    const from = parseFloat(item.from);
    const to = parseFloat(item.to);

    return {
      ...item,
      change: to - from,
      isFirst:
        keyframes
          .filter(keyframe => keyframe.name === item.name)
          .sort((a, b) => a.start - b.start)
          .indexOf(item) === 0,
      multiplier: 1 / Math.abs(item.end - item.start),
      isInKeyframe: isInKeyframe(0, item),
      unit: item.from.toString().replace(parseFloat(item.from), ""),
      isTransform: typeof transformKeys[item.name] === "number",
      from,
      to
    };
  });

  const ease = binding.value.ease || "linear";
  const easingFn = easings[ease];
  const reference = binding?.value?.reference || el;

  function callback(_, first = false) {
    const rect = reference.getBoundingClientRect();
    const maximum = window.innerHeight;
    const minimum = -rect.height;

    const globalDecimal = first
      ? 0
      : easingFn(1 - (rect.top - minimum) / (maximum - minimum));

    const matrix = { ...transformKeys };
    keyframes = keyframes.map(item => ({
      ...item,
      lastInKeyframe: item.isInKeyframe,
      isInKeyframe: isInKeyframe(globalDecimal, item)
    }));
    const isMatrix = keyframes.some(
      item => item.isTransform && (item.lastInKeyframe || item.isInKeyframe)
    );

    keyframes.forEach(item => {
      if (item.isFirst || item.isInKeyframe || item.lastInKeyframe) {
        const decimal = normalizedDecimal(globalDecimal, { ...item });
        const value = `${item.from + item.change * decimal}${item.unit}`;

        if (item.isTransform) {
          matrix[item.name] = value;
        } else {
          el.style[item.name] = value;
        }
      }
    });

    if (isMatrix) {
      const matrixValue = Object.values(matrix)
        .map(value => `${value}`)
        .join(", ");

      el.style.transform = `matrix(${matrixValue})`;
    }
  }

  callback(null, true);

  const observer = intersector({
    el: reference,
    onEnter: () => addItem(reference, callback),
    onLeave: () => {
      callback(null, false);
      removeItem(reference);
    }
  });

  directivesMap.set(id, { ...item, reference, observer });
};

export default {
  inserted: bindScrollAnimate,
  update: bindScrollAnimate,
  unbind
};
