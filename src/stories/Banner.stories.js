import Banner from "../components/banner/Banner.vue";
import "./storybook.css";
import "../assets/styles/index.scss";
import { icons } from "./utils";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    description: { control: { type: "text" } },
    icon: { control: { type: "select", options: [false].concat(icons) } },
    type: {
      control: {
        type: "select",
        options: ["switcher", "warning"]
      }
    }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Banner },
    template: `<div class="theme-light">
      <Banner v-bind="$props"/>
    </div>`
  };
};

export const Warning = Template.bind({});
Warning.args = {
  description:
    "Be careful when working at a client environment. Requests will be added to their monthly limits.",
  type: "warning",
  icon: "warning-triangle"
};

export const Switcher = Template.bind({});
Switcher.args = {
  type: "switcher",
  description: "hey"
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  description:
    "Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits. Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits.",
  type: "warning",
  icon: "warning-triangle"
};
