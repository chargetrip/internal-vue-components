import Tab from "../components/tab/Tab.vue";
import "../assets/styles/index.scss";
import { icons, LoopTemplate } from "./utils";
import { Sizes as TabSizes } from "../enums/tab";

const tabSizes = Object.values(TabSizes);

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    title: { control: { type: "text" } },
    subTitle: { control: { type: "text" } },
    active: { control: { type: "boolean" } },
    disabled: { control: { type: "disabled" } },
    icon: { control: { type: "select", options: icons } }
  }
};

export const Sizes = LoopTemplate.bind({});
Sizes.args = {
  loop: {
    items: tabSizes,
    prop: "size"
  },
  title: "Tab"
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Tab },
    template: `<div class="theme-dark flex items-start">
        <Tab v-bind="$props"/>
    </div>`
  };
};

export const Disabled = Template.bind();
Disabled.args = {
  size: TabSizes.md,
  title: "Disabled",
  disabled: true
};

export const LongTitle = Template.bind();
LongTitle.args = {
  size: TabSizes.md,
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};
