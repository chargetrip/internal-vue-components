import Theme from "../components/theme/Theme.vue";
import RadioTree from "../components/radio-tree/RadioTree.vue";

export default {
  title: "Form/RadioTree",
  component: RadioTree,
  argTypes: {
    darkMode: { control: { type: "boolean" } },
    overflow: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { RadioTree, Theme },
    data: () => ({
      val: null,
      choices: [
        {
          id: "Option 1",
          label: "label",
          subLabel: "sub label",
          isWarning: true
        },
        { id: "Option 2", label: "Hey!" },
        { id: "Option 3", label: "Hey!" }
      ]
    }),
    template: `<Theme :dark-mode="darkMode">
      <RadioTree v-bind="$props" :options="choices" v-model="val"/>
      <div class="mt-6">
        Selected: {{ val }}
      </div>
    </Theme>`
  };
};

const NestedTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { RadioTree, Theme },
    data: () => ({
      val: null,
      choices: [
        {
          title: "Some group name",
          subLabel: "hey",
          children: [
            { id: "Option 1" },
            { id: "Option 2", subLabel: "hey" },
            { id: "Option 3" }
          ]
        },
        {
          title: "Another group name",
          subLabel: "hey",
          children: [
            { id: "Option 1" },
            { id: "Option 2", subLabel: "hey" },
            { id: "Option 3" }
          ]
        }
      ]
    }),
    methods: {
      getLabel(option) {
        return `${option.children.length} children`;
      }
    },
    template: `<Theme :dark-mode="darkMode">
      <RadioTree v-bind="$props" :options="choices" v-model="val" :label-fn="getLabel"/>
      <div class="mt-6">
        Selected: {{ val }}
      </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
export const Nested = NestedTemplate.bind({});
Primary.args = {};
