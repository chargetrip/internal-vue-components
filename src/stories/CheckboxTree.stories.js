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
      test: [
        {
          label: "Aiways",
          id: "Aiways",
          subLabel: "0 / 0 selected",
          children: [
            {
              label: "U5 63 kWh",
              subLabel: null,
              id: "5f043da2bc262f1627fc0333"
            }
          ]
        },
        {
          label: "Audi",
          id: "Audi",
          subLabel: "0 / 0 selected",
          children: [
            {
              label: "e-tron 50 quattro",
              subLabel: null,
              id: "5f043d3bbc262f1627fc0309"
            },
            {
              label: "e-tron 55 quattro",
              subLabel: null,
              id: "5d161beac9eef4a1f1d9d21a"
            },
            {
              label: "e-tron 55 quattro",
              subLabel: null,
              id: "5f043d91bc262f1627fc032f"
            },
            {
              label: "e-tron S 55 quattro",
              subLabel: null,
              id: "5f043db0bc262f1627fc0339"
            },
            {
              label: "e-tron S Sportback 55 quattro",
              subLabel: null,
              id: "5f043db7bc262f1627fc033b"
            },
            {
              label: "e-tron Sportback 50 quattro",
              subLabel: null,
              id: "5f043d88bc262f1627fc032b"
            },
            {
              label: "e-tron Sportback 55 quattro",
              subLabel: null,
              id: "5f043c26bc262f1627fc0299"
            }
          ]
        },
        {
          label: "BMW",
          id: "BMW",
          subLabel: "0 / 0 selected",
          children: [
            {
              label: "i3 60 Ah (2017-2018)",
              subLabel: null,
              id: "5d161beec9eef4074dd9d224"
            },
            {
              label: "i3 120 Ah",
              subLabel: null,
              id: "5d161bf4c9eef4a5b6d9d236"
            },
            {
              label: "i3 60 Ah",
              subLabel: null,
              id: "5e4693c559010964af60c0a1"
            },
            {
              label: "i3 94 Ah",
              subLabel: null,
              id: "5f043b7cbc262f1627fc025d"
            },
            {
              label: "i3s 94 Ah",
              subLabel: null,
              id: "5d161beec9eef4c250d9d225"
            },
            {
              label: "i3s 120 Ah",
              subLabel: null,
              id: "5f043c8cbc262f1627fc02bf"
            },
            {
              label: "iX3 80 kWh",
              subLabel: null,
              id: "5f48c73b40d9c46b192c3c24"
            }
          ]
        },
        {
          label: "Byton",
          id: "Byton",
          subLabel: "0 / 0 selected",
          children: [
            {
              label: "M-Byte 72 kWh 2WD",
              subLabel: null,
              id: "5f043d52bc262f1627fc0315"
            },
            {
              label: "M-Byte 95 kWh 2WD",
              subLabel: null,
              id: "5f043dbebc262f1627fc033d"
            },
            {
              label: "M-Byte 95 kWh 4WD",
              subLabel: null,
              id: "5f043d58bc262f1627fc0317"
            }
          ]
        }
      ],
      value2: []
    }),
    components: { CheckboxTree },
    template: `<div class="theme-dark">
      <div class=" grid grid-cols-1 gap-2">
        <CheckboxTree :options="test" v-model="value2" :all="{label: 'Select all 201 vehicles'}" />
      </div>
    </div>`
  };
};

const ChildlessTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data: () => ({
      test: [
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          id: "234324"
        },
        {
          value: true,
          id: "12341324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        },
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          id: "2343223424"
        },
        {
          value: true,
          id: "412323441324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        },
        {
          value: true,
          label:
            'Option 1<div class="text-12 font-normal text-alt3">2 Cars</div>',
          id: "23423431224"
        },
        {
          value: true,
          id: "123423411324",
          label: 'Option 2<div class="text-12 text-alt3">2 Cars</div>'
        }
      ],
      value2: []
    }),
    components: { CheckboxTree },
    template: `<div class="theme-dark">
      <div class=" grid grid-cols-1 gap-2">
        <CheckboxTree :options="test" v-model="value2" :all="{label: 'Select all 201 vehicles'}" />
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
