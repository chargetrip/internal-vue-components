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
      <Slider v-bind="$props">
        <div class="w-screen h-screen bg-error"></div>
        <div class="w-screen h-screen bg-accent"></div>
        <div class="w-screen h-screen bg-warning"></div>
      </Slider>
    </Theme>`
  };
};

export const Default = Template.bind({});
Default.args = {};
