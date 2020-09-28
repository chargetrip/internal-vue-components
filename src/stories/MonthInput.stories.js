import MonthInput from "../components/month-input/MonthInput.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/MonthInput",
  component: MonthInput,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      val1: "",
      val2: ""
    }),
    components: { MonthInput },
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-4">
        <MonthInput class="max-w-xs" v-bind="$props" v-model="val1" />
      </div>
    </div>`
  };
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Placeholder"
};

export const Label = Template.bind({});
Label.args = {
  placeholder: "Label"
};

export const LabelAndPlaceholder = Template.bind({});
LabelAndPlaceholder.args = {
  label: "Label",
  placeholder: "Placeholder"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: true
};
