import Theme from "../components/theme/Theme.vue";
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
    disabled: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
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
    components: { Readonly, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Readonly class="max-w-xs" v-bind="$props"/>
      <Readonly class="max-w-xs" v-bind="$props" :options="ops" v-model="optValue"/>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  value: null,
  label: "Label",
  suffix: "#",
  readonly: true,
  disabled: false
};
