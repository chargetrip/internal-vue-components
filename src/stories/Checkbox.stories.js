import Checkbox from "../components/checkbox/Checkbox.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: { type: "text" } },
    subLabel: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    box: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      value1: false,
      value2: false
    }),
    components: { Checkbox },
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-2 content-start">
        <Checkbox v-bind="$props" checkbox-id="123123" v-model="value1" />
      </div>
    </div>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  label: "Label"
};

export const SubLabel = Template.bind({});
SubLabel.args = {
  label: "Label",
  subLabel: "Sub Label"
};

export const Box = Template.bind({});
Box.args = {
  label: "Label",
  box: true,
  subLabel: "Sub Label"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  subLabel: "Sub Label",
  disabled: true
};
