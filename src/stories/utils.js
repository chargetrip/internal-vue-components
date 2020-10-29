export const options = [
  { value: "Value 1", label: "Value 1" },
  { value: "Value 2", label: "Value 2" },
  { value: "Value 3", label: "Value 3" },
  { value: "Value 4", label: "Value 4" }
];
export const icons = [
  "enter",
  "route",
  "slash",
  "minus",
  "chevron-down",
  "chevron-up",
  "chevron-right",
  "chevron-left",
  "arrow-left",
  "arrow-right",
  "arrow-up-left",
  "arrow-up-right",
  "add",
  "close",
  "checkmark",
  "search",
  "brand",
  "car",
  "charge-stations",
  "person-circle",
  "eye-invisible",
  "eye-visible",
  "clipboard",
  "edit",
  "delete",
  "arrow-circle-up",
  "side-panel-bottom",
  "side-panel-top",
  "side-panel-right",
  "side-panel-left",
  "map-marker",
  "warning-triangle",
  "image",
  "warning-circle",
  "info",
  "open-charge-map",
  "ecomovement",
  "filter",
  "export",
  "import",
  "log-out",
  "log-in",
  "uniE92D",
  "uniE92E",
  "contact",
  "terminal",
  "receipt",
  "reports",
  "graph-bars",
  "graph-line",
  "add-project",
  "projects",
  "circle-cross",
  "circle-pending",
  "circle-checkmark"
];

export const LoopTemplate = (args, { argTypes, parameters: { component } }) => {
  const DynamicComp = component;

  return {
    props: Object.keys(argTypes),
    components: { DynamicComp },
    template:
      '<div class="theme-dark flex flex-col items-start justify-start"><DynamicComp class="mb-2 last:mb-0" v-bind="props(value)" :key="key" v-for="(value, key) in loop.items" /></div>',
    methods: {
      props(value) {
        const props = {
          ...this.$props
        };
        props[this.loop.prop] = value;
        return props;
      }
    }
  };
};
