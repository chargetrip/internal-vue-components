import Theme from "../components/theme/Theme.vue";
import WebsiteHeader from "../components/website-header/WebsiteHeader.vue";
import Banner from "../components/banner/Banner.vue";
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
    data: () => ({}),
    props: Object.keys(argTypes),
    components: { WebsiteHeader, Theme, Banner },
    template: `<Theme :dark-mode="darkMode" style="padding: 0">
      <Banner v-if="!careerUrl && !isBannerHidden" v-bind="$props" href="https://go.chargetrip.com" title="Discover the power of our API. Explore Chargetrip Go" description="Use the same Enterprise grade routing our customers love and trust."/>
      <WebsiteHeader :is-banner-hidden="isBannerHidden" @setIsMenuOpen="isMenuOpen = $event" :is-menu-open="isMenuOpen" class="z-50 w-full" v-bind="$props"/>
      <div style="height: 5000px; background-color: #e5e5f7"></div>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: true,
  isBannerHidden: false,
  careerUrl: "",
  isMenuOpen: false
};
