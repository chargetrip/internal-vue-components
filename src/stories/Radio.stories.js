import Theme from "../components/theme/Theme.vue";
import Radio from "../components/radio/Radio.vue";

export default {
  title: "Form/Radio",
  component: Radio,
  argTypes: {
    label: { control: { type: "text" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Radio, Theme },
    data: () => ({
      val: "test"
    }),
    template: `<Theme :dark-mode="darkMode">
      <Radio v-bind="$props" v-model="val" id="radio 1" label="radio 1"/>
      <Radio v-bind="$props" v-model="val" id="radio 2" sub-label="sub label" label="radio 2"/>
      <div class="mt-4">
        Selected: {{val}}
      </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
