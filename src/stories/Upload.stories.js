import Upload from "../components/upload/Upload.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Upload",
  component: Upload,
  argTypes: {}
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Upload },
    template: `<div class="theme-dark">
      <Upload class="h-1/2 w-1/2" v-bind="$props"/>
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
