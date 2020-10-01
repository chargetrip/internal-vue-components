import Table from "../components/table/Table.vue";
import "../assets/styles/index.scss";
import Button from "../components/button/Button";
import router from "../router";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {}
};

const Template = (args, { argTypes }) => {
  return {
    router,
    props: Object.keys(argTypes),
    components: { Table },
    template: `<div class="theme-dark">
      <Table v-bind="$props" />
    </div>`
  };
};

export const Primary = Template.bind({});
Primary.args = {
  columns: [
    "Customer ID",
    "Full name",
    "Status",
    "No. of projects",
    "No. of apps",
    "Current plan",
    "Created"
  ],
  rows: [
    [
      {
        title: "auth0|5f3e8cbacc0837003795644c"
      },
      {
        title: "Tim"
      },
      {
        title:
          '<div class="flex items-center"><span class="w-1 h-1 mr-1 rounded-full bg-accent"></span><span>Active</span></div>'
      },
      {
        title: 1
      },
      {
        title: 2
      },
      {
        children: [
          {
            is: Button,
            color: "alt",
            title: "Free plan"
          }
        ]
      },
      {
        title: "Aug 20, 16:46 PM"
      }
    ],
    [
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        title: "auth0|5f216fcdc16865003cfdd8c6"
      },
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        title: "emilian.dragan+teste453@chargetrip.com"
      },
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        title:
          '<div class="flex items-center"><span class="w-1 h-1 mr-1 rounded-full bg-accent"></span><span>Active</span></div>'
      },
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        title: 2
      },
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        title: 0
      },
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        children: [
          {
            is: Button,
            color: "alt",
            title: "Free plan"
          }
        ]
      },
      {
        is: "router-link",
        to: "/customers/auth0|5f216fcdc16865003cfdd8c6",
        title: "Jul 29, 14:47 PM"
      }
    ]
  ]
};
