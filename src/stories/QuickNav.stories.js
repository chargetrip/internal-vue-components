import QuickNav from "../components/quick-nav/QuickNav.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/QuickNav",
  component: QuickNav,
  argTypes: {
    href: { control: { type: "text" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { QuickNav },
    template: `<div class="theme-light flex items-start">
      <QuickNav v-bind="$props"/>
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {};
