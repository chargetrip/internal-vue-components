import CombinedFormControl from "../components/combined-form-control/CombinedFormControl.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/CombinedFormControl",
  component: CombinedFormControl,
  argTypes: {
    title: { control: { type: "text" } },
    content: { control: { type: "text" } },
    ctas: { control: { type: "object" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CombinedFormControl },
    template: `<div class="theme-dark">
      <AlertComp v-bind="$props" />
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
