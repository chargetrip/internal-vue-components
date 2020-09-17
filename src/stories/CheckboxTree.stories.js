import CheckboxTree from "../components/checkbox-tree/CheckboxTree.vue";
import "../assets/styles/index.scss";

export default {
  title: "Form/CheckboxTree",
  component: CheckboxTree,
  argTypes: {
    all: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      options: [
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          children: [
            {
              value: true,
              label: "Option 1 sub 1"
            },
            {
              value: true,
              label: "Option 1 sub 2"
            }
          ]
        },
        {
          value: true,
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>',
          children: [
            {
              value: true,
              label: "Option 2 sub 1"
            },
            {
              value: true,
              label: "Option 2 sub 2"
            }
          ]
        }
      ],
      value2: false
    }),
    components: { CheckboxTree },
    template: `<div class="theme-dark">
      <div class=" grid grid-cols-1 gap-2">
        <CheckboxTree v-bind="$props" v-model="options" />
      </div>
    </div>`
  };
};

export const Normal = Template.bind({});
Normal.args = {};

export const ToggleAll = Template.bind({});
ToggleAll.args = {
  all: true
};
