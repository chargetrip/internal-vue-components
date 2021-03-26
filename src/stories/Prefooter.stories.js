import Theme from "../components/theme/Theme.vue";
import Prefooter from "../components/prefooter/Prefooter.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Prefooter",
  component: Prefooter,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Prefooter, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Prefooter class="w-full" />
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {};
