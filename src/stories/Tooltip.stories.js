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
      date: null,
      show: false
    }),
    components: { Tooltip, Tag },
    template: `<div class="theme-dark flex justify-center">
    <div class="flex justify-start items-start">
      <div class="group relative mr-4">
        <Tag color="alt">Group Hover</Tag>
        <Tooltip v-bind="$props" class="z-10">
          Some descriptive text
        </Tooltip>
      </div>
      <div>
        <div class="relative" @mouseenter="show = true" @mouseleave="show = false">
          <Tag color="alt">Data Hover</Tag>
          <Tooltip v-bind="$props" v-if="show" class="z-10">
            Some descriptive text
          </Tooltip>
        </div>
      </div>
    </div>
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
