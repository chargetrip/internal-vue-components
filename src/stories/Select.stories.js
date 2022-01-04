import Theme from "../components/theme/Theme.vue";
import Select from "../components/select/Select.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Select",
  component: Select,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    multi: { control: { type: "boolean" } },
    tags: { control: { type: "boolean" } },
    disabled: { control: { type: "disabled" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Select, Theme },
    data: () => ({
      value1: 0,
      value2: [],
      value3: [],
      value4: "",
      choices: [
        {
          value: false,
          label: "0 adswfasdfasdf",
          subLabel: "hey"
        },
        {
          value: true,
          label: "1 fasdfasdfasdf",
          subLabel: "hey"
        },
        { value: 3, label: "2 fdsafas" }
      ]
    }),
    template: `<Theme :dark-mode="darkMode">
      <div class="grid grid-cols-1 gap-2 max-w-xs">
        <Select :options="choices" v-bind="$props" v-model="value1" />
        <Select :options="choices" v-bind="Object.assign({}, $props, {multi: true})" v-model="value2" size="sm" />
        <Select :options="choices" v-bind="Object.assign({}, $props, {multi: true, tags: true})" v-model="value3" />
        <Select :options="choices" v-bind="$props" :disabled="true" v-model="value4" />
      </div>
    </Theme>`
  };
};

export const Label = Template.bind({});
Label.args = {
  label: "Label"
  // options: options
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Select option"
  // options: options
};
