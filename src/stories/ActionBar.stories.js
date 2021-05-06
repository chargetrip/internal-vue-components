import Theme from "../components/theme/Theme.vue";
import ActionBar from "../components/action-bar/ActionBar.vue";
import Button from "../components/button/Button.vue";

export default {
  title: "components/ActionBar",
  component: ActionBar,
  argTypes: {
    sticky: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } },
    position: { control: { type: "select", options: ["top", "bottom"] } },
    color: { control: { type: "select", options: ["body", "base"] } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { ActionBar, Theme, Button },
    data: () => ({
      val: "test"
    }),
    template: `<Theme :dark-mode="darkMode">
      <div class="overflow-y-scroll w-full" style="height: 500px; width: 400px;" :class="{'bg-base': color === 'base'}">
        <ActionBar v-bind="$props" v-if="position === 'top'">
          <Button size="sm" color="accent">
            Submit
          </Button>
        </ActionBar>
        <ul>
          <li v-for="(i) in 400" :key="i">
            {{i}}
          </li>
        </ul>
        <ActionBar v-bind="$props" v-if="position === 'bottom'">
          <Button size="sm" color="accent">
            Submit
          </Button>
        </ActionBar>
      </div>
    </Theme>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  sticky: true,
  color: "body",
  position: "top"
};