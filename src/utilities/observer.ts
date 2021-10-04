export const intersector = ({
  el,
  onEnter,
  onLeave,
  options
}: {
  el: HTMLElement;
  onEnter: (entry: IntersectionObserverEntry) => void;
  onLeave: (entry: IntersectionObserverEntry) => void;
  options?: object;
}) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      onEnter(entry);
    }

    if (!entry.isIntersecting) {
      onLeave(entry);
    }
  }, options || {});

  observer.observe(el);

  return observer;
};
