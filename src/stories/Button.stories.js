import Button from "../components/button/Button.vue";
import "../assets/styles/index.scss";
import { icons, LoopTemplate } from "./utils";
import { Sizes as ButtonSizes, Colors as ButtonColors } from "../enums/button";

const buttonSizes = Object.values(ButtonSizes);
const buttonColors = Object.values(ButtonColors);

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: { type: "select", options: buttonColors } },
    size: { control: { type: "select", options: buttonSizes } },
    icon: { control: { type: "select", options: icons } },
    disabled: { control: { type: "boolean" } }
  }
};

export const Sizes = LoopTemplate.bind();
Sizes.args = {
  loop: {
    items: buttonSizes,
    prop: "size"
  },
  color: ButtonColors.accent,
  title: "Button"
};

export const Colors = LoopTemplate.bind();
Colors.args = {
  loop: {
    items: buttonColors,
    prop: "color"
  },
  size: ButtonSizes.md,
  title: "Button"
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Button },
    template: `<div class="theme-dark">
      <div class="max-w-xs">
        <Button v-bind="$props"/>
      </div>
    </div>`
  };
};

export const Disabled = Template.bind();
Disabled.args = {
  size: ButtonSizes.md,
  color: ButtonColors.accent,
  title: "Button",
  disabled: true
};

export const LargeTitle = Template.bind();
LargeTitle.args = {
  size: ButtonSizes.md,
  color: ButtonColors.accent,
  title: "Button Button Button Button Button Button Button Button",
  disabled: false
};

export const LargeTitleWithIcon = Template.bind();
LargeTitleWithIcon.args = {
  size: ButtonSizes.md,
  color: ButtonColors.accent,
  icon: "checkmark",
  title: "Button Button Button Button Button Button Button Button",
  disabled: false
};
