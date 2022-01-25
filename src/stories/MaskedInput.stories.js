import Theme from "../components/theme/Theme.vue";
import MaskedInput from "../components/masked-input/MaskedInput.vue";
import Button from "../components/button/Button.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import "./storybook.css";
import { validationMixin } from "vuelidate";

export default {
  title: "Form/MaskedInput",
  component: MaskedInput,
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
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { MaskedInput, Button, Theme },
    mixins: [validationMixin],
    data() {
      return {
        input1: null,
        input2: "",
        input3: "",
        input4: "",
        input5: ""
      };
    },
    methods: {
      submit() {
        this.$v.$touch();
      }
    },
    template: `<Theme :dark-mode="darkMode">
      <div class="grid grid-cols-1 gap-2 content-start max-w-lg">
        <MaskedInput 
          v-model="input1"
          v-bind="$props"
        />
      </div>
    </Theme>`
  };
};

export const Date = Template.bind({});
Date.args = {
  label: "DD / MM / YYYY",
  maskOptions: {
    mask: "`00` {/} `00` {/} `0000`",
    placeholderChar: " ",
    overwrite: true,
    lazy: true
  }
};

export const Currency = Template.bind({});
Currency.args = {
  placeholder: "Amount",
  prefix: "€",
  maskOptions: {
    mask: "num",
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: " "
      }
    },
    placeholderChar: " ",
    overwrite: true,
    lazy: true
  }
};

export const CreditCard = Template.bind({});
CreditCard.args = {
  placeholder: "Card number",
  maskOptions: {
    mask: "`0000` `0000` `0000` `0000`",
    placeholderChar: " ",
    overwrite: true,
    lazy: true
  }
};
