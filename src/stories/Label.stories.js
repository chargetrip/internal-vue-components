import Theme from "../components/theme/Theme.vue";
import Label from "../components/label/Label.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    darkMode: { control: { type: "boolean" } },
    forLabel: { control: { type: "string" } },
    label: { control: { type: "string" } },
    subLabel: { control: { type: "string" } },
    subLabelClass: { control: { type: "string" } },
    direction: { control: { type: "string" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Label, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Label class="h-1/2 w-1/2" v-bind="$props"/>
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  label: "Hello"
};

export const WithSublabel = Template.bind({});
WithSublabel.args = {
  label: "Hello",
  subLabel: "World"
};

export const WithStyledSublabel = Template.bind({});
WithStyledSublabel.args = {
  label: "Hello",
  subLabel: "World",
  subLabelClass: "mt-4"
};

export const DirectionRow = Template.bind({});
DirectionRow.args = {
  label: "Hello",
  subLabel: "World",
  direction: "row"
};
