import Theme from "../components/theme/Theme.vue";
import Range from "../components/range/Range.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Range",
  component: Range,
  argTypes: {
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    left: { control: { type: "string" } },
    right: { control: { type: "string" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      val: [100, 300]
    }),
    components: { Range, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Range v-bind="$props" v-model="val"/>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  min: 0,
  max: 500,
  labelLeft: "Left",
  labelRight: "Right"
};
