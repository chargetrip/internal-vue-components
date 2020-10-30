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
          value: false,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "234324",
          children: [
            {
              value: true,
              label: "Option 1 sub 1",
              checkboxId: "asdfsdf"
            },
            {
              value: true,
              label: "Option 1 sub 2",
              checkboxId: "dsf"
            },
            {
              value: true,
              label: "Option 1 sub 2",
              checkboxId: "ds234f"
            },
            {
              value: true,
              label: "Option 1 sub 2",
              checkboxId: "d234sf"
            }
          ]
        },
        {
          value: true,
          checkboxId: "12341324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>',
          children: [
            {
              value: true,
              label: "Option 2 sub 2",
              checkboxId: "324"
            },
            {
              value: true,
              label: "Option 2 sub 2",
              checkboxId: "sd"
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

const ChildlessTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      options: [
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "234324"
        },
        {
          value: true,
          checkboxId: "12341324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        },
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "2343223424"
        },
        {
          value: true,
          checkboxId: "412323441324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        },
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          checkboxId: "23423431224"
        },
        {
          value: true,
          checkboxId: "123423411324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
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

export const ChildlessNormal = ChildlessTemplate.bind({});
Normal.args = {};

export const ChildlessToggleAll = ChildlessTemplate.bind({});
ToggleAll.args = {
  all: true
};
