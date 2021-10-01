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
  "add",
  "add-project",
  "arrow-left",
  "arrow-right",
  "arrow-up-left",
  "arrow-up-right",
  "brand",
  "car",
  "charge-stations",
  "checkmark",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "circle-arrow-down",
  "circle-arrow-up",
  "circle-checkmark",
  "circle-cross",
  "circle-pending",
  "clipboard",
  "close",
  "contact",
  "delete",
  "ecomovement",
  "edit",
  "enter",
  "export",
  "eye-invisible",
  "eye-visible",
  "filter",
  "graph-bars",
  "graph-line",
  "image",
  "import",
  "info",
  "log-in",
  "log-out",
  "map-marker",
  "minus",
  "open-charge-map",
  "person-circle",
  "projects",
  "receipt",
  "reports",
  "route",
  "search",
  "side-panel-bottom",
  "side-panel-left",
  "side-panel-right",
  "side-panel-top",
  "slash",
  "terminal",
  "uniE92D",
  "uniE92E",
  "warning-circle",
  "warning-triangle"
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
