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
      <WebsiteHeader @setIsMenuOpen="isMenuOpen = $event" :is-menu-open="isMenuOpen" class="z-50 w-full" v-bind="$props"/>
      <div style="height: 5000px; background-color: #e5e5f7">
        <div class="bg-red-500 w-full h-full"/>
        <div class="inset-0 z-10 absolute bg-gradient-to-r from-body to-transparent-body"/>
      </div>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: true
};
