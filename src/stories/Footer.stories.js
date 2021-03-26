import Theme from "../components/theme/Theme.vue";
import Footer from "../components/footer/Footer.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router: router,
    props: Object.keys(argTypes),
    components: { Footer, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Footer class="w-full" v-bind="$props"/>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {};
