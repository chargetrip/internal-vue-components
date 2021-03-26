import Theme from "../components/theme/Theme.vue";
import CSwitch from "../components/switch/Switch.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Switch",
  component: CSwitch,
  argTypes: {
    label: { control: { type: "text" } },
    size: { control: { type: "select", options: ["sm", "md"] } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CSwitch, Theme },
    data: () => ({
      value: ""
    }),
    template: `<Theme :dark-mode="darkMode">
        <CSwitch v-bind="$props" v-model="value" />
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  label: "label",
  size: "md"
};
