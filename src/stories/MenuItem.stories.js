import Theme from "../components/theme/Theme.vue";
import MenuItem from "../components/menu-item/MenuItem.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import router from "../router";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    title: { control: { type: "text" } },
    to: { control: { type: "text" } },
    icon: { control: { type: "select", options: icons } },
    soon: { control: { type: "boolean" } },
    target: { control: { type: "select", options: ["_blank", "_self"] } },
    href: { control: { type: "text" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router: router,
    props: Object.keys(argTypes),
    components: { MenuItem, Theme },
    template: `<Theme :dark-mode="darkMode">
      <MenuItem v-bind="$props"/>
    </Theme>`
  };
};

export const Internal = Template.bind({});
Internal.args = {
  title: "Analytics",
  icon: "graph-line"
};

export const External = Template.bind({});
External.args = {
  title: "API Reference",
  target: "_blank",
  icon: "terminal"
};

export const Soon = Template.bind({});
Soon.args = {
  title: "Invoices",
  target: "_blank",
  icon: "receipt",
  soon: true
};
