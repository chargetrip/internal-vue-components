import Theme from "../components/theme/Theme.vue";
import MaskedInput from "../components/masked-input/MaskedInput.vue";
import Button from "../components/button/Button.vue";
import Block from "../components/block/Block.vue";
import "../assets/styles/index.scss";
import { icons } from "./utils";
import "./storybook.css";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

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
    readonly: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { MaskedInput, Button, Theme, Block },
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
      <div class="space-y-8">
        <div class="flex space-x-4">
          <div class="space-y-2">
            <h3>
              Body
            </h3>
            <MaskedInput 
              v-model="input1" 
              v-bind="$props"
            />
          </div>
          <Block class="space-y-2" :style="{backgroundColor: 'transparent'}">
            <h3>
              Inside editing box.
            </h3>
            <MaskedInput
              v-model="input1"
              v-bind="$props"
            />
          </Block>
        </div>
        <Button @click.native="submit" type="primary" size="md">
          Submit
        </Button>
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
  label: "Enter an amount",
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
  label: "Card number",
  placeholder: "Card number",
  maskOptions: {
    mask: "`0000` `0000` `0000` `0000`",
    placeholderChar: " ",
    overwrite: true,
    lazy: true
  }
};
