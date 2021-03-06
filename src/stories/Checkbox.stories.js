import Checkbox from "../components/checkbox/Checkbox.vue";
import Button from "../components/button/Button.vue";
import "../assets/styles/index.scss";
import { validationMixin } from "vuelidate";
import { sameAs } from "vuelidate/lib/validators";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: { type: "text" } },
    subLabel: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    box: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    mixins: [validationMixin],
    data: () => ({
      value1: false,
      value2: false
    }),
    validations: {
      value1: {},
      value2: {}
    },
    methods: {
      submit() {
        this.$v.$touch();
      }
    },
    components: { Checkbox, Button },
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-2 content-start">
        <Checkbox v-model="$v.value2.$model" :box="true" :validation="$v.$dirty && $v.value2" v-bind="$props" checkbox-id="1234" />
        <Checkbox v-model="$v.value1.$model" :validation="$v.$dirty && $v.value1" v-bind="$props" checkbox-id="123" />
        <Button color="accent" @click.native="submit">Submit</Button>
      </div>
    </div>`
  };
};

export const Normal = Template.bind({});
Normal.args = {
  label: "Label"
};

export const SubLabel = Template.bind({});
SubLabel.args = {
  label: "Label",
  subLabel: "Sub Label"
};

export const Box = Template.bind({});
Box.args = {
  label: "Label",
  box: true,
  subLabel: "Sub Label"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  subLabel: "Sub Label",
  disabled: true
};
