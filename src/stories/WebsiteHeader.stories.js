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
      <div style="height: 5000px; background-color: #e5e5f7;
          background-color: #e5e5f7;
          opacity: 0.8;
          background-image:  linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777);
          background-size: 20px 35px;
          background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;"></div>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: true
};
