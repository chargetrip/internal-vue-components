import Theme from "../components/theme/Theme.vue";
import RadioTree from "../components/radio-tree/RadioTree.vue";

export default {
  title: "Form/RadioTree",
  component: RadioTree,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { RadioTree, Theme },
    data: () => ({
      val: null,
      choices: [{ id: "Option 1" }, { id: "Option 2" }, { id: "Option 3" }]
    }),
    template: `<Theme :dark-mode="darkMode">
      <RadioTree :options="choices" v-model="val"/>
      <div class="mt-6">
        Selected: {{ val }}
      </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {};
