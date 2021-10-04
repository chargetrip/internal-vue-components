const globals: { raf: number | null; items: any } = {
  raf: null,
  items: []
};

const frame = () => {
  globals.raf = requestAnimationFrame(frame);

  for (let i = globals.items.length - 1; i >= 0; i--) {
    const item = globals.items[i];
    item.callback(item);
  }

  if (!globals.items.length) {
    cancelAnimationFrame(globals.raf);
    globals.raf = null;
  }
};

export const removeItem = el => {
  globals.items = globals.items.filter(item => !item.el.isEqualNode(el));
};

export const addItem = (el, callback) => {
  globals.items.push({ el, callback });

  if (!globals.raf) {
    globals.raf = requestAnimationFrame(frame);
  }
};
