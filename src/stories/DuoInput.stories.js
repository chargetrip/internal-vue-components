import Theme from "../components/theme/Theme.vue";
import Button from "../components/button/Button.vue";
import DuoInput from "../components/duo-input/DuoInput.vue";
import "../assets/styles/index.scss";
import { required, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  title: "form/DuoInput",
  component: DuoInput,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    validations: {
      form: {
        input1: {
          value: {
            required,
            minLength: minLength(5)
          }
        },
        input2: {
          value: {
            required,
            minLength: minLength(5)
          }
        }
      }
    },
    props: Object.keys(argTypes),
    mixins: [validationMixin],
    data: () => ({
      form: {
        input1: {
          label: "Label",
          value: null
        },
        input2: {
          label: "Label",
          value: null
        }
      }
    }),
    components: { Button, DuoInput, Theme },
    template: `<Theme :dark-mode="darkMode">
      <div class="space-y-8">
        <DuoInput @blur="$v.form.$touch" error-message="Some error message" :validation="$v.form" :input1="form.input1" :input2="form.input2" @input1="form.input1.value = $event" @input2="form.input2.value = $event" v-bind="$props" />
        <Button size="sm" type="primary" @click.native="$v.form.$touch">
          Submit
        </Button>
      </div>
    </Theme>`
  };
};

export const Normal = Template.bind({});
Normal.args = {};
