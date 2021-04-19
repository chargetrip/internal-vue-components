import Theme from "../components/theme/Theme.vue";
import CompactCard from "../components/compact-card/CompactCard.vue";
import "../assets/styles/index.scss";
import { icons, options } from "./utils";
import { default as Btn } from "../components/button/Button";

import CheckboxTree from "../components/checkbox-tree/CheckboxTree";
import { default as CSwitch } from "../components/switch/Switch";
import Radio from "../components/radio/Radio.vue";

export default {
  title: "Components/CompactCard",
  component: CompactCard,
  argTypes: {
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    imageBackground: { control: { type: "color" } },
    imageIcon: { control: { type: "select", options: icons } },
    fullyClickable: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { CompactCard, Theme },
    template: `<Theme :dark-mode="darkMode">
      <CompactCard class="w-1/2" v-bind="Object.assign({},$props, {image: {bg: $props.imageBackground, icon: $props.imageIcon}})" />
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  imageIcon: "open-charge-map",
  imageBackground: "#8cc63f",
  title: "Title",
  description: "Description"
};

export const LargeText = Template.bind({});
LargeText.args = {
  imageIcon: "open-charge-map",
  imageBackground: "#8cc63f",
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};

export const Switch = Template.bind({});
Switch.args = {
  imageIcon: "open-charge-map",
  imageBackground: "#8cc63f",
  title: "Title",
  fullyClickable: true,
  description: "Description",
  cta: {
    is: CSwitch,
    value: true
  }
};

export const Button = Template.bind({});
Button.args = {
  imageIcon: "open-charge-map",
  imageBackground: "#8cc63f",
  title: "Title",
  description: "Description",
  cta: {
    is: Radio,
    value: "some-value",
    id: "some-value",
    title: "title",
    color: "note",
    size: "sm",
    icon: "arrow-circle-up",
    callback: console.log
  }
};

export const Component = Template.bind({});
Component.args = {
  imageIcon: "open-charge-map",
  imageBackground: "#8cc63f",
  title: "Title",
  description: "Description",
  detail: {
    active: false,
    component: CheckboxTree,
    bind: {
      all: true
    },
    value: options
  }
};
