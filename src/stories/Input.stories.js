import Theme from "../components/theme/Theme.vue";
import Input from "../components/input/Input.vue";
import Button from "../components/button/Button.vue";
import Block from "../components/block/Block.vue";
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
    disabled: { control: { type: "boolean" } },
    readonly: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Input, Button, Theme, Block },
    mixins: [validationMixin],
    data() {
      return {
        errorMessages: {
          minLength: "14 or more charactres",
          specialCharacter: "Contains a special character",
          lowerCharacter: "Contains a lowercase character",
          upperCharacter: "Contains a uppercase character"
        },
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
          minLength: value => value?.length >= 14,
          specialCharacter: value =>
            /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value),
          lowerCharacter: value => !!value?.length && /[a-z]/.test(value),
          upperCharacter: value => /[A-Z]/.test(value)
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
    template: `<Theme :dark-mode="darkMode">
      <div class="space-y-8">
        <div class="flex space-x-4">
          <div class="space-y-2">
            <h3>
              Body
            </h3>
            <Input v-model="$v.form.input1.$model" :rules="errorMessages" :error-message="null" :form="$v" :validation="$v.form.input1" v-bind="$props" rules-title="Password strength" />
            <Input v-model="$v.form.input2.$model" type="number" :validation="$v.$dirty && $v.form.input2" error-message="Error!@" v-bind="$props" prefix="€" />
            <Input v-model="$v.form.input3.$model" :validation="$v.$dirty && $v.form.input3" error-message="Error!@" v-bind="$props" prefix="€" />
          </div>
          <Block class="space-y-2" :style="{backgroundColor: 'transparent'}">
            <h3>
              Inside editing box.
            </h3>
            <Input v-model="$v.form.input1.$model" :rules="errorMessages" :error-message="null" :form="$v" :validation="$v.form.input1" v-bind="$props" rules-title="Password strength" />
            <Input v-model="$v.form.input2.$model" type="number" :validation="$v.$dirty && $v.form.input2" error-message="Error!@" v-bind="$props" prefix="€" />
            <Input v-model="$v.form.input3.$model" :validation="$v.$dirty && $v.form.input3" error-message="Error!@" v-bind="$props" prefix="€" />
          </Block>
        </div>
<!--        <Input v-model="$v.form.input3.$model" :validation="$v.$dirty && $v.form.input3" error-message="Error!@" v-bind="$props" suffix="%" />-->
<!--        <Input v-model="$v.form.input4.$model" :validation="$v.$dirty && $v.form.input4" error-message="Error!@" v-bind="$props" :hotkey="{icon: 'slash'}" icon="search" />-->
<!--        <Input v-model="$v.form.input5.$model" :validation="$v.$dirty && $v.form.input5" error-message="Error!@" v-bind="$props" :disabled="true" />-->
        <Button @click.native="submit" type="primary" size="md">
          Submit
        </Button>
      </div>
    </Theme>`
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
