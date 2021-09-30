import Theme from "../components/theme/Theme.vue";
import TextArea from "../components/textarea/TextArea.vue";

import "../assets/styles/index.scss";
import { icons } from "./utils";
import "./storybook.css";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  title: "Form/TextArea",
  component: TextArea,
  argTypes: {
    placeholder: { control: { type: "text" } },
    label: { control: { type: "text" } },
    prefix: { control: { type: "text" } },
    suffix: { control: { type: "text" } },
    icon: { control: { type: "select", options: icons } },
    hotkey: { control: { type: "object" } },
    disabled: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } },
    autoresize: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { TextArea, Theme },
    mixins: [validationMixin],
    data() {
      return {
        errorMessages: {
          minLength: "14 or more characters",
          specialCharacter: "Contains a special character",
          lowerCharacter: "Contains a lowercase character",
          upperCharacter: "Contains an uppercase character"
        },
        form: {
          textarea1: null,
          textarea2: "",
          textarea3: ""
        }
      };
    },
    validations: {
      form: {
        textarea1: {
          minLength: value => value?.length >= 14,
          required
        },
        textarea2: {
          minLength: value => value?.length >= 14,
          required
        },
        textarea3: {
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
      <div class="grid grid-cols-1 gap-2 content-start max-w-lg">
        <TextArea
          v-model="$v.form.textarea1.$model"
          :rules="errorMessages"
          :error-message="null"
          :form="$v"
          :validation="$v.form.textarea1"
          v-bind="$props"
          rules-title="Example rules"
        />
        <TextArea
          v-model="$v.form.textarea2.$model"
          :validation="$v.$dirty && $v.form.textarea2"
          error-message="Error!@"
          autoresize="true"
          v-bind="$props"
        />
        <TextArea
          v-model="$v.form.textarea3.$model"
          :validation="$v.$dirty && $v.form.textarea3"
          error-message="Error!@"
          v-bind="$props"
        />
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
  placeholder: "You're on! Provide us with some background information."
};
