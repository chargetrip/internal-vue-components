export const intersector = ({ el, onEnter, onLeave }) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      onEnter(entry);
    }

    if (!entry.isIntersecting) {
      onLeave(entry);
    }
  });

  observer.observe(el);

  return observer;
};
