import Theme from "../components/theme/Theme.vue";
import Upload from "../components/upload/Upload.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Upload",
  component: Upload,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Upload, Theme },
    template: `<Theme :dark-mode="darkMode">
      <Upload class="h-1/2 w-1/2" v-bind="$props"/>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
