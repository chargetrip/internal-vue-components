import Theme from "../components/theme/Theme.vue";
import TopNav from "../components/top-nav/TopNav.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/TopNav",
  component: TopNav,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router,
    props: Object.keys(argTypes),
    components: { TopNav, Theme },
    template: `<Theme :dark-mode="darkMode">
      <TopNav v-bind="$props"/>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  // signOut: false
};
