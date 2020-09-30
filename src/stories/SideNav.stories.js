import SideNav from "../components/side-nav/SideNav.vue";
import "../assets/styles/index.scss";

export default {
  title: "Components/Test",
  component: SideNav,
  argTypes: {
    darkMode: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { SideNav },
    template: `<div class="theme-dark items-start">
      <SideNav class="fixed left-0 top-0" style="flex: 0 0 400px;" v-bind="$props" />
    </div>`
  };
};

export const Default = Template.bind({});
Default.args = {
  navs: [
    [
      {
        title: "Projects",
        to: "/projects",
        icon: "projects"
      },
      {
        title: "Data usage",
        to: "/data-usage",
        icon: "graph-bars"
      },
      {
        title: "Statistics",
        to: "/statistics",
        icon: "graph-bars"
      },
      {
        title: "Reports",
        to: "/reports",
        icon: "reports"
      },
      {
        title: "Stations",
        to: "/stations",
        icon: "charge-stations"
      },
      {
        title: "Routes",
        to: "/routes",
        icon: "route"
      },
      {
        title: "Customers",
        to: "/customers",
        icon: "person-circle"
      },
      {
        title: "Cars",
        to: "/cars",
        icon: "car"
      },
      {
        title: "Invoices",
        soon: true,
        icon: "receipt"
      },
      {
        title: "Profile",
        to: "/profile",
        icon: "person-circle"
      }
    ],
    [
      {
        title: "API Reference",
        icon: "terminal",
        href: "sdfsdf"
      },
      {
        title: "Support",
        icon: "contact"
      }
    ]
  ],
  darkMode: false
};

export const Children = Template.bind({});
Children.args = {
  navs: [
    [
      {
        title: "Projects",
        to: "/projects",
        children: [
          {
            title: "Data usage",
            to: "/data-usage"
          },
          {
            title: "Statistics",
            to: "/statistics"
          },
          {
            title: "Reports",
            to: "/reports"
          }
        ]
      },
      {
        title: "Data usage",
        to: "/data-usage"
      },
      {
        title: "Statistics",
        to: "/statistics"
      },
      {
        title: "Reports",
        to: "/reports"
      },
      {
        title: "Stations",
        to: "/stations"
      },
      {
        title: "Routes",
        to: "/routes"
      },
      {
        title: "Customers",
        to: "/customers"
      },
      {
        title: "Cars",
        to: "/cars"
      },
      {
        title: "Invoices",
        soon: true
      },
      {
        title: "Profile",
        to: "/profile"
      }
    ]
  ],
  darkMode: false
};
