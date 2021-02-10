import Input from "../components/input/Input.vue";
import Button from "../components/button/Button.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import "./storybook.css";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    prefix: { control: { type: "text" } },
    suffix: { control: { type: "text" } },
    icon: { control: { type: "select", options: icons } },
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password", "number"]
      }
    },
    hotkey: { control: { type: "object" } },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Input, Button },
    mixins: [validationMixin],
    data() {
      return {
        form: {
          input1: null,
          input2: "",
          input3: "",
          input4: "",
          input5: ""
        }
      };
    },
    validations: {
      form: {
        input1: {
          required
        },
        input2: {
          required
        },
        input3: {
          required
        },
        input4: {
          required
        },
        input5: {
          required
        }
      }
    },
    methods: {
      submit() {
        this.$v.$touch();
      }
    },
    template: `<div class="theme-dark">
      <div class="grid grid-cols-1 gap-2 content-start">
        <Input v-model="$v.form.input1.$model" :validation="$v.$dirty && $v.form.input1" error-message="Error!@" v-bind="$props" type="number" />
<!--        <Input v-model="$v.form.input2.$model" :validation="$v.$dirty && $v.form.input2" error-message="Error!@" v-bind="$props" prefix="€" />-->
<!--        <Input v-model="$v.form.input3.$model" :validation="$v.$dirty && $v.form.input3" error-message="Error!@" v-bind="$props" suffix="%" />-->
<!--        <Input v-model="$v.form.input4.$model" :validation="$v.$dirty && $v.form.input4" error-message="Error!@" v-bind="$props" :hotkey="{icon: 'slash'}" icon="search" />-->
<!--        <Input v-model="$v.form.input5.$model" :validation="$v.$dirty && $v.form.input5" error-message="Error!@" v-bind="$props" :disabled="true" />-->
        <Button @click.native="submit" color="accent" size="md">
          Submit
        </Button>
      </div>
    </div>`
  };
};

export const Label = Template.bind({});
Label.args = {
  label: "Label"
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Search.."
};
