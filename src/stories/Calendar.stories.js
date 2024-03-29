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
    // Filter the non-deterministic `dateInput` as it will make snapshots fail.
    props: Object.keys(argTypes).filter(p => p !== "dateInput"),
    data: () => ({
      date: args.dateInput
    }),
    components: { Calendar, Theme, Select },
    methods: {
      onInput(e) {
        this.date = e;
      }
    },
    template: `<Theme :dark-mode="darkMode">
        <div class="flex flex-col items-center justify-center">
            {{ date }}
            <Calendar v-bind="$props" :value="date" @input="onInput" />
        </div>
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  range: false,
  dateInput: [new Date("2022-01-01")]
};

export const Range = Template.bind({});
Range.args = {
  range: true,
  dateInput: [new Date("2022-01-01"), new Date("2022-01-15")]
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
