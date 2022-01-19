import Theme from "../components/theme/Theme.vue";
import DateInput from "../components/date-input/DateInput.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/DateInput",
  component: DateInput,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      val1: new Date(),
      val2: "",
      val3: "",
      val4: ""
    }),
    components: { DateInput, Theme },
    template: `<Theme :dark-mode="darkMode">
      <div class="grid grid-cols-1 gap-4">
        <DateInput
          class="max-w-xs"
          v-bind="$props"
          label="MM / YYYY"
          formatString="MM / yyyy"
          mask="## / ####"
          :initialValue="val1"
        />
        <DateInput
          class="max-w-xs"
          v-bind="$props"
          formatString="dd / MM / yyyy"
          mask="## / ## / ####"
          label="DD / MM / YYYY"
          v-model="val2"
        />
        <DateInput
          class="max-w-xs"
          v-bind="$props"
          formatString="dd-MM-yyyy"
          mask="##-##-####"
          label="DD-MM-YYYY"
          v-model="val3"
        />
        <DateInput
          class="max-w-xs"
          v-bind="$props"
          formatString="dd.MM.yyyy"
          mask="##.##.####"
          label="DD.MM.YYYY"
          v-model="val4"
        />

      </div>
    </Theme>`
  };
};

export const Label = Template.bind({});
Label.args = {
  placeholder: "Label"
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Placeholder"
};

export const LabelAndPlaceholder = Template.bind({});
LabelAndPlaceholder.args = {
  label: "Label",
  placeholder: "Placeholder"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: true
};
