import Theme from "../components/theme/Theme.vue";
import CombinedFormControl from "../components/combined-form-control/CombinedFormControl.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/CombinedFormControl",
  component: CombinedFormControl,
  argTypes: {
    title: { control: { type: "text" } },
    content: { control: { type: "text" } },
    ctas: { control: { type: "object" } },
    darkMode: { control: { type: "boolean" } },
    icon: { control: { type: "text" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CombinedFormControl, Theme },
    template: `<Theme :dark-mode="darkMode">
      <CombinedFormControl v-bind="$props" />
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  icon: null
};
