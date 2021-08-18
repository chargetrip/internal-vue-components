import { threshold } from "../utilities/utilities";

export default {
  inserted: (el, binding) => {
    const targetRatio = binding.value.ratio || 1;

    const callback = ([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio >= targetRatio) {
        if (binding.value?.forwards) {
          binding.observer.disconnect();
        }
        binding.value.callback?.(entry);
        el.classList.add("is-in-viewport");
      } else if (el.classList.contains("is-in-viewport")) {
        el.classList.remove("is-in-viewport");
      }
    };

    // @ts-ignore
    binding.observer = new IntersectionObserver(callback, { threshold });
    binding.observer.observe(el);
  },
  unbind: (el, binding) => {
    binding.observer?.disconnect?.();
    el.classList.remove("is-in-viewport");
  }
};
