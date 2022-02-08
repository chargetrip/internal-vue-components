import Theme from "../components/theme/Theme.vue";
import TabGroup from "../components/tab-group/TabGroup.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/TabGroup",
  component: TabGroup,
  argTypes: {
    darkMode: { control: { type: "boolean" } },
    isDisabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      items2: [
        { label: "-" },
        { label: "I" },
        { label: "II" },
        { label: "III" }
      ],
      index: 0
    }),
    components: { TabGroup, Theme },
    template: `<Theme :dark-mode="darkMode">
    <div class="flex items-center">
      <TabGroup v-bind="$props" :items="items2" v-model="index"/>
    </div>
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {};
