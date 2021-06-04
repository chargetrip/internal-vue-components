import Theme from "../components/theme/Theme.vue";

export const options = [
  { label: "Car no longer for sale in any market / region", value: 0 },
  { label: "Car currently for sale in at least one market / region", value: 1 },
  {
    label: "Car expected in market from Date_From (estimated), pre-order open",
    value: 2
  },
  {
    label:
      "Car expected in market from Date_From (estimated), pre-order unkown or not open",
    value: 3
  },
  {
    label: "Concept car, nearing production and/or confirmed, pre-order open",
    value: 12
  },
  {
    label:
      "Concept car, nearing production and/or confirmed, pre-order unknown or not open",
    value: 13
  },
  {
    label:
      "Concept car, not close to production and/or unconfirmed, pre-order open",
    value: 22
  },
  {
    label:
      "Concept car, not close to production and/or unconfirmed, pre-order unknown",
    value: 23
  },
  {
    label: "Status uncertain, introduction date and/or pricing unclear",
    value: 91
  }
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
    components: { DynamicComp, Theme },
    template:
      '<Theme :dark-mode="darkMode"><DynamicComp class="mb-2 last:mb-0" v-bind="props(value)" :key="key" v-for="(value, key) in loop.items" /></Theme>',
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
