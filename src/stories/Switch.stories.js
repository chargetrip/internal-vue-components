import CSwitch from "../components/switch/Switch.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Switch",
  component: CSwitch,
  argTypes: {
    label: { control: { type: "text" } },
    size: { control: { type: "select", options: ["sm", "md"] } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CSwitch },
    data: () => ({
      value: ""
    }),
    template: `<div class="theme-dark flex items-start">
        <CSwitch v-bind="$props" v-model="value" />
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  label: "label",
  size: "md"
};
