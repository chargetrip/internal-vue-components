import Theme from "../components/theme/Theme.vue";
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
        options: ["left", "bottom", "top"]
      }
    },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null,
      show: false
    }),
    components: { Tooltip, Tag, Theme },
    template: `<Theme :dark-mode="darkMode">
    <div class="flex justify-start items-start mt-20">
      <div class="group relative mr-4">
        <Tag color="alt">Group Hover</Tag>
        <Tooltip v-bind="$props" class="z-10">
          Some descriptive text
        </Tooltip>
      </div>
      <div class="mr-4">
        <div class="relative" @mouseenter="show = true" @mouseleave="show = false">
          <Tag color="alt">Data Hover</Tag>
          <Tooltip v-bind="$props" v-if="show" class="z-10">
            Some descriptive text
          </Tooltip>
        </div>
      </div>
      <div class="group">
        <div class="relative group">
          <Tag color="alt">No anim</Tag>
          <Tooltip v-bind="$props" :no-animation="true" class="z-10">
            Some descriptive text
          </Tooltip>
        </div>
      </div>
    </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
