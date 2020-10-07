import Calendar from "../components/calendar/Calendar.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/Calendar",
  component: Calendar,
  argTypes: {
    range: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      date: null
    }),
    components: { Calendar },
    template: `<div class="theme-dark">
        <div class="max-w-md flex items-center mx-auto">
            <Calendar class="mx-auto" v-bind="$props" v-model="date" />
        </div>
    </div>`
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
