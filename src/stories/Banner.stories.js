import Banner from "../components/banner/Banner.vue";
import "./storybook.css";
import "../assets/styles/index.scss";
import { icons } from "./utils";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    description: { control: { type: "text" } },
    icon: { control: { type: "select", options: icons } },
    type: {
      control: {
        type: "select",
        options: ["error", "warning", "success", "note"]
      }
    }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Banner },
    template: `<div class="theme-dark">
      <Banner v-bind="$props"/>
    </div>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  description:
    "Be careful when working at a client environment. Requests will be added to their monthly limits.",
  type: "warning",
  icon: "warning-triangle"
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  description:
    "Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits. Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits. Be careful when working at a client environment. Requests will be added to their monthly limits.",
  type: "warning",
  icon: "warning-triangle"
};
