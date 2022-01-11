import Theme from "../components/theme/Theme.vue";
import Calendar from "../components/calendar/Calendar.vue";
import Select from "../components/select/Select.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Calendar",
  component: Calendar,
  argTypes: {
    range: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: [new Date("2021-01-01"), new Date("2022-01-05")],
      value1: null,
      choices: [
        {
          value: true,
          label:
            "Enabled asdfadsfadsfa qewrfqsdafsf asdfadsfadsfa qewrfqsdafsf asdfadsfadsfa qewrfqsdafsf",
          subLabel: "hey"
        },
        { value: false, label: "Disabled" }
      ]
    }),
    components: { Calendar, Theme, Select },
    template: `<Theme :dark-mode="darkMode">
        <div class="flex items-center justify-center">
            <Calendar v-bind="$props" v-model="date" />
            <Select :options="choices" v-bind="$props" v-model="value1" />
        </div>
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  range: false
};

export const Range = Template.bind({});
Range.args = {
  range: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
