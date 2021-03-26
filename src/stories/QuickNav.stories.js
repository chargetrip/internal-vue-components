import Theme from "../components/theme/Theme.vue";
import QuickNav from "../components/quick-nav/QuickNav.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/QuickNav",
  component: QuickNav,
  argTypes: {
    href: { control: { type: "text" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { QuickNav, Theme },
    template: `<Theme :dark-mode="darkMode">
      <QuickNav v-bind="$props"/>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {};
