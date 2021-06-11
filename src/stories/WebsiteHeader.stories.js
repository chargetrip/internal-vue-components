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
    data: () => ({
      isMenuOpen: false
    }),
    props: Object.keys(argTypes),
    components: { WebsiteHeader, Theme },
    template: `<Theme :dark-mode="darkMode" class="h-screen" style="padding: 0" :class="{'overflow-y-hidden': isMenuOpen, 'overflow-y-scroll': !isMenuOpen}">
      <WebsiteHeader @setIsMenuOpen="isMenuOpen = $event" :is-menu-open="isMenuOpen" class="w-full" v-bind="$props"/>
      <div style="height: 5000px; background: red;"></div>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: true
};
