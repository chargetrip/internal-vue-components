import Input from "../components/input/Input.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import "./storybook.css";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    prefix: { control: { type: "text" } },
    suffix: { control: { type: "text" } },
    icon: { control: { type: "select", options: icons } },
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password", "number"]
      }
    },
    hotkey: { control: { type: "object" } },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Input },
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-2 content-start">
        <Input v-bind="$props" />
        <Input v-bind="$props" prefix="€" />
        <Input v-bind="$props" suffix="%" />
        <Input v-bind="$props" :hotkey="{icon: 'slash'}" icon="search" />
        <Input v-bind="$props" :disabled="true" />
      </div>
    </div>`
  };
};

export const Label = Template.bind({});
Label.args = {
  label: "Label"
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Search.."
};
