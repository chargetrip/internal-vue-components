import Select from "../components/select/Select.vue";
import "../assets/styles/index.scss";
import { options } from "./utils";

export default {
  title: "Form/Select",
  component: Select,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    multi: { control: { type: "boolean" } },
    tags: { control: { type: "boolean" } },
    disabled: { control: { type: "disabled" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Select },
    data: () => ({
      value1: "",
      value2: [],
      value3: [],
      value4: ""
    }),
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-2 max-w-xs">
        <Select v-bind="$props" v-model="value1" />
        <Select v-bind="Object.assign({}, $props, {multi: true})" v-model="value2" size="sm" />
        <Select v-bind="Object.assign({}, $props, {multi: true, tags: true})" v-model="value3" />
        <Select v-bind="$props" :disabled="true" v-model="value4" />
      </div>
    </div>`
  };
};

export const Label = Template.bind({});
Label.args = {
  label: "Label",
  options: options
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Select option",
  options: options
};
