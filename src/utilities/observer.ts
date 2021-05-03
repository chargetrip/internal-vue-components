import { threshold } from "./utilities";

export const intersector = ({ el, onEnter, onLeave, state = 0 }) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // console.log(el, entry)
      if (entry.intersectionRatio && !state) {
        state = 1;
        onEnter(entry);
      }

      if (!entry.intersectionRatio && state) {
        state = 0;
        onLeave(entry);
      }
    },
    {
      threshold
    }
  );

  observer.observe(el);

  return observer;
};
