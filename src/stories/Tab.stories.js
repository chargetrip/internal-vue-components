import Theme from "../components/theme/Theme.vue";
import Tab from "../components/tab/Tab.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import { Sizes as TabSizes } from "../enums/tab";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    title: { control: { type: "text" } },
    subTitle: { control: { type: "text" } },
    active: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    warning: { control: { type: "boolean" } },
    icon: { control: { type: "select", options: icons } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Tab, Theme },
    template: `<Theme :dark-mode="darkMode">
      <div class="flex">
        <Tab v-bind="$props"/>
      </div>
    </Theme>`
  };
};

export const Normal = Template.bind();
Normal.args = {
  size: TabSizes.md,
  title: "Disabled",
  disabled: false
};

export const LongTitle = Template.bind();
LongTitle.args = {
  size: TabSizes.md,
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};
