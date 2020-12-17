import SideNav from "../components/side-nav/SideNav.vue";
import "../assets/styles/index.scss";
import router from "../router";
import Input from "../components/input/Input.vue";
export default {
  title: "Components/SideNav",
  component: SideNav,
  argTypes: {
    darkMode: { control: { type: "boolean" } },
    spacing: { control: { type: "number" } },
    showToggleMenu: { control: { type: "boolean" } }
  }
};

const Template = (args, { argTypes }) => {
  return {
    router,
    props: Object.keys(argTypes),
    components: { SideNav, Input },
    template: `
          <div class="theme-light w-full" style="padding:0;">
          <SideNav class="lg:h-screen" v-bind="$props">
            <Input
                class="px-3 lg-max:hidden"
                icon="search"
                :hotkey="{
                  icon: 'slash',
                  key: '/',
                }"
                placeholder="Search.."
            />
          </SideNav>
        </div>`
  };
};

export const DevPortal = Template.bind({});
DevPortal.args = {
  showToggleMenu: true,
  navs: [
    [
      {
        to: "/home",
        icon: "home",
        title: "Home",
        hideChildren: true,
        children: []
      },
      {
        order: null,
        path: "Getting-Started",
        fullPath: "/Getting-Started",
        children: [
          {
            order: 1,
            path: "API-Basics",
            fullPath: "/Getting-Started/API-Basics",
            children: [
              {
                order: 1,
                path: "API",
                fullPath: "/Getting-Started/API-Basics/API",
                children: [
                  {
                    to: "/Getting-Started/API-Basics/API/getting-started",
                    order: 2,
                    title: "Getting started",
                    children: []
                  },
                  {
                    to: "/Getting-Started/API-Basics/API/authorization",
                    order: 3,
                    title: "Authorization",
                    children: []
                  },
                  {
                    to: "/Getting-Started/API-Basics/API/status-error-codes",
                    order: 3,
                    title: "Status & Error Codes",
                    children: []
                  }
                ],
                title: "API"
              }
            ],
            title: "API Basics"
          },
          {
            order: 2,
            path: "EV-Basics",
            fullPath: "/Getting-Started/EV-Basics",
            children: [
              {
                order: 1,
                path: "Electric-Vehicles",
                fullPath: "/Getting-Started/EV-Basics/Electric-Vehicles",
                children: [
                  {
                    to: "/Getting-Started/EV-Basics/Electric-Vehicles/EV",
                    order: 1,
                    title: "Introduction",
                    children: []
                  }
                ],
                title: "Electric Vehicles"
              }
            ],
            title: "EV Basics"
          },
          {
            order: 3,
            path: "GraphQL-Basics",
            fullPath: "/Getting-Started/GraphQL-Basics",
            children: [
              {
                order: 1,
                path: "GraphQL",
                fullPath: "/Getting-Started/GraphQL-Basics/GraphQL",
                children: [
                  {
                    to: "/Getting-Started/GraphQL-Basics/GraphQL/graphQL",
                    order: 1,
                    title: "Introduction",
                    children: []
                  }
                ],
                title: "GraphQL"
              }
            ],
            title: "GraphQL Basics"
          }
        ],
        title: "Getting Started",
        icon: "building-blocks"
      },
      {
        order: null,
        path: "API-Reference",
        fullPath: "/API-Reference",
        children: [
          {
            order: 1,
            path: "API",
            fullPath: "/API-Reference/API",
            children: [
              {
                to: "/API-Reference/API/pagination",
                order: 1,
                title: "Pagination",
                children: []
              },
              {
                to: "/API-Reference/API/introduction",
                order: 1,
                title: "Introduction",
                children: []
              }
            ],
            title: "API"
          },
          {
            order: 2,
            path: "Cars",
            fullPath: "/API-Reference/Cars",
            children: [
              {
                to: "/API-Reference/Cars/cars",
                order: 1,
                title: "Cars",
                children: []
              }
            ],
            title: "Cars"
          },
          {
            order: 3,
            path: "Stations",
            fullPath: "/API-Reference/Stations",
            children: [
              {
                to: "/API-Reference/Stations/introduction",
                order: 1,
                title: "Stations",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-stations",
                order: 2,
                title: "Query stations",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-station-details",
                order: 3,
                title: "Query station details",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-stations-around",
                order: 4,
                title: "Query stations around a GeoJSON point",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-station-reviews",
                order: 5,
                title: "Query station reviews",
                children: []
              },
              {
                to: "/API-Reference/Stations/mutate-station-reviews",
                order: 6,
                title: "Mutate station reviews",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-operators",
                order: 7,
                title: "Query station operators",
                children: []
              }
            ],
            title: "Stations"
          },
          {
            order: 4,
            path: "Routes",
            fullPath: "/API-Reference/Routes",
            children: [
              {
                to: "/API-Reference/Routes/introduction",
                order: 1,
                title: "Routes",
                children: []
              },
              {
                to: "/API-Reference/Routes/mutate-route",
                order: 2,
                title: "Mutate route",
                children: []
              },
              {
                to: "/API-Reference/Routes/subscribe-to-route-updates",
                order: 3,
                title: "Subscribe to route updates",
                children: []
              },
              {
                to: "/API-Reference/Routes/query-route-details",
                order: 3,
                title: "Query route details",
                children: []
              }
            ],
            title: "Routes"
          },
          {
            order: 5,
            path: "Tile-Service",
            fullPath: "/API-Reference/Tile-Service",
            children: [
              {
                to: "/API-Reference/Tile-Service/introduction",
                order: 1,
                title: "Tile service",
                children: []
              },
              {
                to: "/API-Reference/Tile-Service/properties",
                order: 2,
                title: "Properties",
                children: []
              },
              {
                to: "/API-Reference/Tile-Service/filters",
                order: 3,
                title: "Filters",
                children: []
              },
              {
                to: "/API-Reference/Tile-Service/integration",
                order: 4,
                title: "Integration",
                children: []
              }
            ],
            title: "Tile Service"
          }
        ],
        title: "API Reference",
        icon: "squared-terminal"
      }
    ],
    [
      {
        to: "/release-notes",
        icon: "notifications",
        title: "Release notes",
        children: []
      },
      {
        to: "/faq",
        icon: "faq-alt-2",
        title: "FAQ",
        children: []
      }
    ],
    [
      {
        title: "Playground",
        icon: "playground",
        href: "https://playground.chargetrip.com/",
        arrow: true
      },
      {
        title: "Voyager",
        icon: "voyager-alt",
        href: "https://voyager.chargetrip.com/",
        arrow: true
      },
      {
        title: "Examples",
        icon: "code",
        href: "https://chargetrip.com/examples/",
        arrow: true
      }
    ]
  ],
  darkMode: false,
  spacing: 6
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  showToggleMenu: true,
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
