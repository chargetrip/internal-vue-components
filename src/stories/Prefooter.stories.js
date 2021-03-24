import Prefooter from "../components/prefooter/Prefooter.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Prefooter",
  component: Prefooter,
  argTypes: {}
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Prefooter },
    template: `<div class="theme-dark flex items-start !p-0">
      <Prefooter class="w-full" />
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {};
