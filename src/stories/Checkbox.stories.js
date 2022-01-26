import Theme from "../components/theme/Theme.vue";
import Checkbox from "../components/checkbox/Checkbox.vue";
import Button from "../components/button/Button.vue";
import Block from "../components/block/Block.vue";
import "../assets/styles/index.scss";
import { validationMixin } from "vuelidate";
export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: { type: "text" } },
    subLabel: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    box: { control: { type: "boolean" } },
    darkMode: { control: { type: "boolean" } }
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
      value1: {
        value: value => value
      },
      value2: {
        value: value => value
      }
    },
    methods: {
      submit() {
        this.$v.$touch();
      }
    },
    components: { Checkbox, Button, Theme, Block },
    template: `<Theme :dark-mode="darkMode">
      <div class="space-y-8">
        <div class="space-x-4 flex">
          <div class="space-y-2">
            <h3>In body</h3>
            <Checkbox v-model="value2" :validation="$v.value2" v-bind="$props" checkbox-id="1234" />
            <Checkbox v-model="value1" :validation="$v.value1" v-bind="$props" checkbox-id="123" />
          </div>
          <Block class="space-y-2" :style="{backgroundColor: 'transparent'}">
            <h3>
              Inside editing box.
            </h3>
            <Checkbox v-model="value2" :validation="$v.value2" v-bind="$props" checkbox-id="1234" />
            <Checkbox v-model="value1" :validation="$v.value1" v-bind="$props" checkbox-id="123" />
          </Block>
        </div>
        <Button type="primary" @click.native="submit">Submit</Button>
      </div>
    </Theme>`
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
