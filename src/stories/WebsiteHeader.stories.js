import Theme from "../components/theme/Theme.vue";
import WebsiteHeader from "../components/website-header/WebsiteHeader.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/WebsiteHeader",
  component: WebsiteHeader,
  argTypes: {
    isLoggedIn: { type: "boolean" },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router: router,
    props: Object.keys(argTypes),
    components: { WebsiteHeader, Theme },
    template: `<Theme :dark-mode="darkMode">
      <WebsiteHeader class="w-full" v-bind="$props"/>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: true
};
