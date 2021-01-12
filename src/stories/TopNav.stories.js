import TopNav from "../components/top-nav/TopNav.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/TopNav",
  component: TopNav,
  argTypes: {}
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { TopNav },
    template: `<div class="theme-light flex items-start">
      <TopNav v-bind="$props"/>
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {};
