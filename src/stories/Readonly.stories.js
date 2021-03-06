import Readonly from "../components/readonly/Readonly.vue";
import "../assets/styles/index.scss";
import { options } from "./utils";

export default {
  title: "Form/Readonly",
  component: Readonly,
  argTypes: {
    value: { control: { type: "text" } },
    label: { control: { type: "text" } },
    readonly: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      val: "",
      optValue: options[0].value,
      ops: options
    }),
    components: { Readonly },
    template: `<div class="theme-dark">
      <Readonly class="max-w-xs" v-bind="$props"/>
      <Readonly class="max-w-xs" v-bind="$props" :options="ops" v-model="optValue"/>
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  value: "Value",
  label: "Label",
  suffix: "#",
  readonly: true,
  disabled: false
};
