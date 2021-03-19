import Footer from "../components/footer/Footer.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {}
};

const Template = (args, { argTypes }) => {
  return {
    router: router,
    props: Object.keys(argTypes),
    components: { Footer },
    template: `<div class="theme-dark flex items-start !p-0">
      <Footer class="w-full" v-bind="$props"/>
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {};
