import WebsiteHeader from "../components/website-header/WebsiteHeader.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/WebsiteHeader",
  component: WebsiteHeader,
  argTypes: {
    isLoggedIn: { type: "boolean" }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router: router,
    props: Object.keys(argTypes),
    components: { WebsiteHeader },
    template: `<div class="theme-light flex items-start !p-0">
      <WebsiteHeader class="w-full" v-bind="$props"/>
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {
  isLoggedIn: true
};
