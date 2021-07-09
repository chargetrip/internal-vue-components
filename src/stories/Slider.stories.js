import Theme from "../components/theme/Theme.vue";
import Slider from "../components/slider/Slider.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Slider, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Slider v-bind="$props"/>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {};
