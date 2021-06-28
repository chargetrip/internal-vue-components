import Banner from "../components/banner/Banner.vue";
import "./storybook.css";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import Theme from "../components/theme/Theme.vue";

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
    },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      hidden: false
    }),
    methods: {
      onHide() {
        this.hidden = true;
      }
    },
    components: { Banner, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Banner :hidden="hidden" @hide="onHide" v-bind="$props" href="https://go.chargetrip.com" title="Discover the power of our API. Explore Chargetrip Go" description="Use the same Enterprise grade routing our customers love and trust."/>
    </Theme>`
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
