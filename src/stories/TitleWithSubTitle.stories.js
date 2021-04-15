import Theme from "../components/theme/Theme.vue";
import TitleWithSubTitle from "../components/title-with-sub-title/TitleWithSubTitle.vue";

export default {
  title: "components/TitleWithSubTitle",
  component: TitleWithSubTitle,
  argTypes: {
    title: { control: { type: "text" } },
    prefix: { control: { type: "text" } },
    suffix: { control: { type: "text" } },
    subTitle: { control: { type: "text" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { TitleWithSubTitle, Theme },
    data: () => ({
      val: "test"
    }),
    template: `<Theme :dark-mode="darkMode">
      <TitleWithSubTitle v-bind="$props"/>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  title: "0.5",
  prefix: ">",
  suffix: "KW/h",
  subTitle: "Drag Coefficient"
};
