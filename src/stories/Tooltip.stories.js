import Tooltip from "../components/tooltip/Tooltip.vue";
import Tag from "../components/tag/Tag.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    orientation: {
      control: {
        type: "select",
        options: ["left", "bottom"]
      }
    }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Tooltip, Tag },
    template: `<div class="theme-dark flex justify-center">
    <div>
      <div class="group relative">
        <Tag color="alt">Hover</Tag>
        <Tooltip v-bind="$props">
          Some descriptive text
        </Tooltip>
      </div>
      
    </div>
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
