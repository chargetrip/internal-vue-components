import SideNav from "../components/side-nav/SideNav.vue";
import "../assets/styles/index.scss";
import router from "../router";
import Input from "../components/input/Input.vue";
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
    components: { SideNav, Input },
    template: `
        <div class="theme-light w-full" style="padding:0; height: 100vh; width: 240px; background: red;">
          <SideNav class="lg:h-screen" v-bind="$props">
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
        to: "/",
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
                to: "/Getting-Started/API-Basics/getting-started",
                order: 1,
                title: "Getting started",
                children: []
              },
              {
                to: "/Getting-Started/API-Basics/authorization",
                order: 2,
                title: "Authorization",
                children: []
              },
              {
                to: "/Getting-Started/API-Basics/status-error-codes",
                order: 3,
                title: "Status & Error Codes",
                children: []
              }
            ],
            title: "API Basics"
          },
          {
            order: 2,
            path: "Other-Basics",
            fullPath: "/Getting-Started/Other-Basics",
            children: [
              {
                to: "/Getting-Started/Other-Basics/graphQL",
                order: 1,
                title: "GraphQL Basics",
                children: []
              },
              {
                to: "/Getting-Started/Other-Basics/EV",
                order: 2,
                title: "EV Basics",
                children: []
              }
            ],
            title: "Other Basics"
          }
        ],
        title: "Getting Started",
        icon: "lightning"
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
                to: "/API-Reference/API/introduction",
                order: 1,
                title: "Quick setup guide",
                children: []
              },
              {
                to: "/API-Reference/API/pagination",
                order: 2,
                title: "Pagination",
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
                to: "/API-Reference/Cars/introduction",
                order: 1,
                title: "Introduction",
                children: []
              },
              {
                to: "/API-Reference/Cars/query-cars",
                order: 2,
                title: "Query cars",
                children: []
              },
              {
                to: "/API-Reference/Cars/query-car",
                order: 3,
                title: "Query car details",
                children: []
              },
              {
                to: "/API-Reference/Cars/query-car-premium",
                order: 4,
                title: "Query premium car details",
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
                title: "Introduction",
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
                title: "Mutate to create a station review",
                children: []
              },
              {
                to:
                  "/API-Reference/Stations/subscribe-to-station-updates-by-id",
                order: 7,
                title: "Subscribe to station updates",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-operators",
                order: 8,
                title: "Query station operators",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-operators-details",
                order: 9,
                title: "Query station operator details",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-tariffs",
                order: 10,
                title: "Query station tariffs",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-tariff-details",
                order: 11,
                title: "Query station tariff details",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-station-amenities",
                order: 12,
                title: "Query station amenities",
                children: []
              },
              {
                to: "/API-Reference/Stations/query-station-stats",
                order: 13,
                title: "Query station statistics",
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
                title: "Introduction",
                children: []
              },
              {
                to: "/API-Reference/Routes/mutate-route",
                order: 2,
                title: "Mutate to create a new route",
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
                order: 4,
                title: "Query route details",
                children: []
              },
              {
                to: "/API-Reference/Routes/query-route-path-details",
                order: 5,
                title: "Query route path",
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
                title: "Introduction",
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
        icon: "terminal"
      }
    ],
    [
      {
        to: "/release-notes",
        icon: "announcement",
        title: "Release notes",
        children: []
      },
      { to: "/faq", icon: "question-mark-circle", title: "FAQ", children: [] }
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
        icon: "voyager",
        href: "https://voyager.chargetrip.com/",
        arrow: true
      },
      {
        title: "Examples",
        icon: "code",
        href: "https://chargetrip.com/examples/",
        arrow: true
      },
      {
        title: "Github",
        icon: "logo-github",
        href: "https://github.com/chargetrip",
        arrow: true
      }
    ],
    [
      {
        title: "Website",
        icon: "globe",
        href: "https://chargetrip.com/",
        arrow: true
      },
      {
        title: "Documentation",
        icon: "slashes-1",
        href: "https://developers.chargetrip.com/",
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
        title: "Data Usage",
        admin: true,
        to: "/data-usage",
        icon: "graph-bars-squared"
      },
      {
        title: "Customers",
        admin: true,
        to: "/customers",
        icon: "person-circle"
      },
      { title: "Routes", admin: true, to: "/routes", icon: "route" },
      {
        title: "Station debugging",
        admin: true,
        to: "/stations",
        icon: "charge-stations"
      },
      {
        title: "Route debugging",
        admin: true,
        icon: "route",
        fullPath: "/route-debugging",
        children: [
          { title: "Route Inspector", to: "/route-debugging/inspector" },
          { title: "Route Logger", to: "/route-debugging/logger" }
        ]
      },
      { title: "Profile", to: "/profile", icon: "person-circle" }
    ],
    [
      {
        title: "API Reference",
        icon: "terminal",
        href:
          "https://developers.chargetrip.com/API-Reference/API/introduction",
        arrow: true
      },
      {
        title: "Support",
        icon: "contact",
        href: "https://account.chargetrip.com/support"
      }
    ]
  ],
  darkMode: false
};
