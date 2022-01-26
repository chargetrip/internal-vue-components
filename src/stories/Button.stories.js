import Theme from "../components/theme/Theme.vue";
import Button from "../components/button/Button.vue";
import "../assets/styles/index.scss";
import { icons, LoopTemplate } from "./utils";
import { Sizes as ButtonSizes, Type as ButtonTypes } from "../enums/button";

const buttonSizes = Object.values(ButtonSizes);
const buttonTypes = Object.values(ButtonTypes);

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: { control: { type: "select", options: buttonTypes } },
    size: { control: { type: "select", options: buttonSizes } },
    icon: { control: { type: "select", options: icons } },
    disabled: { control: { type: "boolean" } },
    transparent: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } },
    isLoading: { control: { type: "boolean" } }
  }
};

export const Sizes = LoopTemplate.bind({});
Sizes.args = {
  loop: {
    component: Button,
    items: buttonSizes,
    prop: "size"
  },
  openChat: true,
  title: "Button",
  color: ButtonTypes.PRIMARY
};

export const Colors = LoopTemplate.bind({});
Colors.args = {
  loop: {
    items: buttonTypes,
    prop: "type"
  },
  title: "Button",
  size: ButtonSizes.md
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Button, Theme },
    template: `<Theme :dark-mode="darkMode">
      <div class="max-w-xs">
        <Button v-bind="$props"/>
      </div>
    </Theme>`
  };
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: ButtonSizes.md,
  type: ButtonTypes.PRIMARY,
  title: "Button",
  disabled: true
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  size: ButtonSizes.md,
  type: ButtonTypes.PRIMARY,
  title: "Button Button Button Button Button Button Button Button",
  disabled: false
};

export const LargeTitleWithIcon = Template.bind({});
LargeTitleWithIcon.args = {
  size: ButtonSizes.md,
  type: ButtonTypes.PRIMARY,
  icon: "checkmark",
  title: "Button Button Button Button Button Button Button Button",
  disabled: false
};
