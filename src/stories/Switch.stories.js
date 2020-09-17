import CSwitch from "../components/switch/Switch.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Switch",
  component: CSwitch,
  argTypes: {
    label: { control: { type: "text" } },
    onLabel: { control: { type: "text" } },
    offLabel: { control: { type: "text" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CSwitch },
    template: `<div class="theme-dark flex items-start">
        <CSwitch v-bind="$props" v-model="value" />
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  label: "label",
  onLabel: "on",
  offLabel: "off"
};
