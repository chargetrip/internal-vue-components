import SideNav from "../components/side-nav/SideNav.vue";
import "../assets/styles/index.scss";
import router from "../router";

export default {
  title: "Components/SideNav",
  component: SideNav,
  argTypes: {
    darkMode: { control: { type: "boolean" } },
    spacing: { control: { type: "number" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router,
    props: Object.keys(argTypes),
    components: { SideNav },
    template: `
          <div class="theme-light items-start flex w-full">
          <SideNav class="h-screen" style="flex: 0 0 280px;" v-bind="$props"/>
          </div>`
  };
};

export const DevPortal = Template.bind({});
DevPortal.args = {
  navs: [
    [
      { to: "/home", icon: "clipboard", title: "Home", children: [] },
      {
        path: "API",
        children: [
          {
            path: "API-Reference",
            children: [
              {
                path: "Cars",
                children: [
                  {
                    to: "/API/API-Reference/Cars/query-car-details",
                    title: "Query car details",
                    children: [
                      {
                        to: "/API/API-Reference/Cars/query-car-details",
                        hash: "request",
                        title: "Request"
                      },
                      {
                        to: "/API/API-Reference/Cars/query-car-details",
                        hash: "request-parameters",
                        title: "Request parameters"
                      },
                      {
                        to: "/API/API-Reference/Cars/query-car-details",
                        hash: "frequently-used-attributes",
                        title: "Frequently used attributes"
                      },
                      {
                        to: "/API/API-Reference/Cars/query-car-details",
                        hash: "other-attributes",
                        title: "Other attributes"
                      },
                      {
                        to: "/API/API-Reference/Cars/query-car-details",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  }
                ],
                title: "Cars"
              },
              {
                path: "Stations",
                children: [
                  {
                    to: "/API/API-Reference/Stations/query-station-details",
                    icon: undefined,
                    title: "Query station details",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "request",
                        title: "Request"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "request-parameters",
                        title: "Request parameters"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "frequently-used-attributes",
                        title: "Frequently used attributes"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "other-attributes",
                        title: "Other attributes"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  }
                ],
                title: "Stations"
              }
            ],
            title: "API Reference"
          }
        ],
        title: "API"
      },
      {
        path: "setup-&-integration",
        children: [
          {
            path: "API-Basics",
            children: [
              {
                path: "setup",
                children: [
                  {
                    to: "/setup-&-integration/API-Basics/setup/getting-started",
                    title: "Getting started",
                    children: [
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/getting-started",
                        hash: "getting-access",
                        title: "Getting access"
                      },
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/getting-started",
                        hash: "configuring-your-project",
                        title: "Configuring your project"
                      },
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/getting-started",
                        hash: "collect-your-keys",
                        title: "Collect your keys"
                      }
                    ]
                  },
                  {
                    to: "/setup-&-integration/API-Basics/setup/authorization",
                    title: "Authorization",
                    children: [
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/authorization",
                        hash: "the-api",
                        title: "The API"
                      },
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/authorization",
                        hash: "authorization-process",
                        title: "Authorization process"
                      }
                    ]
                  },
                  {
                    to:
                      "/setup-&-integration/API-Basics/setup/status-error-codes",
                    title: "Status & Error Codes",
                    children: [
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/status-error-codes",
                        hash: "api-response-codes",
                        title: "API Response Codes"
                      },
                      {
                        to:
                          "/setup-&-integration/API-Basics/setup/status-error-codes",
                        hash: "api-error-objects",
                        title: "API Error Objects"
                      }
                    ]
                  }
                ],
                title: "Setup"
              }
            ],
            title: "API Basics"
          }
        ],
        title: "Setup & Integration"
      }
    ]
  ],
  darkMode: false,
  spacing: 6
};

export const Dashboard = Template.bind({});
Dashboard.args = {
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
        to: "/invoices",
        soon: true,
        icon: "receipt"
      },
      {
        title: "Profile",
        to: "/profile",
        icon: "person-circle"
      }
    ]
  ],
  darkMode: false
};
