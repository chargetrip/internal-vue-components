import Tag from "../components/tag/Tag.vue";
import "../assets/styles/index.scss";
import { LoopTemplate } from "./utils";
import { Colors as TagColors } from "../enums/tag";

const tagColors = Object.values(TagColors);

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    title: { control: { type: "text" } },
    color: { control: { type: "select", options: tagColors } },
    type: { control: { type: "select", options: ["primary", "secondary"] } }
  }
};

export const Colors = LoopTemplate.bind({});
Colors.args = {
  loop: {
    items: tagColors,
    prop: "color"
  },
  title: "Premium"
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Tag },
    template: `<div class="theme-dark flex items-start">
        <Tag v-bind="$props" type="secondary" />
    </div>`
  };
};

export const LongTitle = Template.bind();
LongTitle.args = {
  color: TagColors.alt,
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
};
