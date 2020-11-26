import SideNav from "../components/side-nav/SideNav.vue";
import "../assets/styles/index.scss";
import router from "../router";

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
    components: { SideNav },
    template: `
          <div class="theme-dark w-full" style="padding:0;">
          <SideNav class="lg:h-screen" v-bind="$props"/>
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
        order: 1,
        icon: "documentation",
        title: "Home",
        hideChildren: true,
        children: [
          { to: "/home", hash: "clone-an-example", title: "Clone an example" },
          { to: "/home", hash: "open-source", title: "Open source" }
        ]
      },
      {
        order: 2,
        path: "Basics",
        children: [
          {
            order: 1,
            path: "API-Basics",
            children: [
              {
                order: 1,
                path: "Setup",
                children: [
                  {
                    to: "/Basics/API-Basics/Setup/getting-started",
                    order: 2,
                    title: "Getting started",
                    children: [
                      {
                        to: "/Basics/API-Basics/Setup/getting-started",
                        hash: "getting-access",
                        title: "Getting access"
                      },
                      {
                        to: "/Basics/API-Basics/Setup/getting-started",
                        hash: "configuring-your-project",
                        title: "Configuring your project"
                      },
                      {
                        to: "/Basics/API-Basics/Setup/getting-started",
                        hash: "collect-your-keys",
                        title: "Collect your keys"
                      }
                    ]
                  },
                  {
                    to: "/Basics/API-Basics/Setup/authorization",
                    order: 3,
                    title: "Authorization",
                    children: [
                      {
                        to: "/Basics/API-Basics/Setup/authorization",
                        hash: "the-api",
                        title: "The API"
                      },
                      {
                        to: "/Basics/API-Basics/Setup/authorization",
                        hash: "authorization-process",
                        title: "Authorization process"
                      }
                    ]
                  },
                  {
                    to: "/Basics/API-Basics/Setup/status-error-codes",
                    order: 3,
                    title: "Status & Error Codes",
                    children: [
                      {
                        to: "/Basics/API-Basics/Setup/status-error-codes",
                        hash: "api-response-codes",
                        title: "API Response Codes"
                      },
                      {
                        to: "/Basics/API-Basics/Setup/status-error-codes",
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
          },
          {
            order: 2,
            path: "EV-Basics",
            children: [
              {
                order: 1,
                path: "Introduction",
                children: [
                  {
                    to: "/Basics/EV-Basics/Introduction/EV",
                    order: 1,
                    title: "Electric Vehicles",
                    children: [
                      {
                        to: "/Basics/EV-Basics/Introduction/EV",
                        hash: "ev-specific-routing",
                        title: "EV-specific routing"
                      }
                    ]
                  }
                ],
                title: "Introduction"
              }
            ],
            title: "EV Basics"
          },
          {
            order: 3,
            path: "GraphQL-Basics",
            children: [
              {
                order: 1,
                path: "Setup",
                children: [
                  {
                    to: "/Basics/GraphQL-Basics/Setup/graphQL",
                    order: 1,
                    title: "GraphQL",
                    children: [
                      {
                        to: "/Basics/GraphQL-Basics/Setup/graphQL",
                        hash: "documentation",
                        title: "Documentation"
                      },
                      {
                        to: "/Basics/GraphQL-Basics/Setup/graphQL",
                        hash: "graphql-basics",
                        title: "GraphQL Basics"
                      },
                      {
                        to: "/Basics/GraphQL-Basics/Setup/graphQL",
                        hash: "primary-operations",
                        title: "Primary operations"
                      }
                    ]
                  }
                ],
                title: "Setup"
              }
            ],
            title: "GraphQL Basics"
          }
        ],
        title: "Basics"
      },
      {
        order: 3,
        path: "API",
        children: [
          {
            order: 1,
            path: "API-Reference",
            children: [
              {
                order: 1,
                path: "Cars",
                children: [
                  {
                    to: "/API/API-Reference/Cars/cars",
                    order: 1,
                    title: "Cars",
                    children: []
                  }
                ],
                title: "Cars"
              },
              {
                order: 2,
                path: "Stations",
                children: [
                  {
                    to: "/API/API-Reference/Stations/introduction",
                    order: 1,
                    title: "Introduction",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/introduction",
                        hash: "database-options",
                        title: "Database options"
                      },
                      {
                        to: "/API/API-Reference/Stations/introduction",
                        hash: "importing-your-own-database",
                        title: "Importing your own database"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Stations/query-stations",
                    order: 2,
                    title: "Query stations",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/query-stations",
                        hash: "query",
                        title: "Query"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Stations/query-station-details",
                    order: 3,
                    title: "Query station details",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "query",
                        title: "Query"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-details",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Stations/query-stations-around",
                    order: 4,
                    title: "Query stations around a GeoJSON point",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/query-stations-around",
                        hash: "query",
                        title: "Query"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations-around",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations-around",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations-around",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-stations-around",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Stations/query-station-reviews",
                    order: 5,
                    title: "Query station reviews",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/query-station-reviews",
                        hash: "query",
                        title: "Query"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-reviews",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-reviews",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-reviews",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-station-reviews",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Stations/mutate-station-reviews",
                    order: 6,
                    title: "Mutate station reviews",
                    children: [
                      {
                        to:
                          "/API/API-Reference/Stations/mutate-station-reviews",
                        hash: "mutation",
                        title: "Mutation"
                      },
                      {
                        to:
                          "/API/API-Reference/Stations/mutate-station-reviews",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to:
                          "/API/API-Reference/Stations/mutate-station-reviews",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to:
                          "/API/API-Reference/Stations/mutate-station-reviews",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to:
                          "/API/API-Reference/Stations/mutate-station-reviews",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Stations/query-operators",
                    order: 7,
                    title: "Query station operators",
                    children: [
                      {
                        to: "/API/API-Reference/Stations/query-operators",
                        hash: "query",
                        title: "Query"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-operators",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-operators",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-operators",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Stations/query-operators",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  }
                ],
                title: "Stations"
              },
              {
                order: 3,
                path: "Routes",
                children: [
                  {
                    to: "/API/API-Reference/Routes/introduction",
                    order: 1,
                    title: "Introduction",
                    children: [
                      {
                        to: "/API/API-Reference/Routes/introduction",
                        hash: "mutation--subscription",
                        title: "Mutation & Subscription"
                      },
                      {
                        to: "/API/API-Reference/Routes/introduction",
                        hash: "notes",
                        title: "Notes"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Routes/mutate-route",
                    order: 2,
                    title: "Mutate route",
                    children: [
                      {
                        to: "/API/API-Reference/Routes/mutate-route",
                        hash: "mutation",
                        title: "Mutation"
                      },
                      {
                        to: "/API/API-Reference/Routes/mutate-route",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Routes/mutate-route",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Routes/mutate-route",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Routes/mutate-route",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Routes/subscribe-to-route-updates",
                    order: 3,
                    title: "Subscribe to route updates",
                    children: [
                      {
                        to:
                          "/API/API-Reference/Routes/subscribe-to-route-updates",
                        hash: "subscription",
                        title: "Subscription"
                      },
                      {
                        to:
                          "/API/API-Reference/Routes/subscribe-to-route-updates",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to:
                          "/API/API-Reference/Routes/subscribe-to-route-updates",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to:
                          "/API/API-Reference/Routes/subscribe-to-route-updates",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to:
                          "/API/API-Reference/Routes/subscribe-to-route-updates",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Routes/query-route-details",
                    order: 3,
                    title: "Query route details",
                    children: [
                      {
                        to: "/API/API-Reference/Routes/query-route-details",
                        hash: "query",
                        title: "Query"
                      },
                      {
                        to: "/API/API-Reference/Routes/query-route-details",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Routes/query-route-details",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Routes/query-route-details",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Routes/query-route-details",
                        hash: "response",
                        title: "Response"
                      }
                    ]
                  }
                ],
                title: "Routes"
              },
              {
                order: 4,
                path: "Tile-Service",
                children: [
                  {
                    to: "/API/API-Reference/Tile-Service/introduction",
                    order: 1,
                    title: "Introduction",
                    children: [
                      {
                        to: "/API/API-Reference/Tile-Service/introduction",
                        hash: "mapbox--cluster-buster-section-here",
                        title: "Mapbox / Cluster Buster Section here."
                      },
                      {
                        to: "/API/API-Reference/Tile-Service/introduction",
                        hash: "configuration",
                        title: "Configuration"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Tile-Service/properties",
                    order: 2,
                    title: "Properties",
                    children: []
                  },
                  {
                    to: "/API/API-Reference/Tile-Service/filters",
                    order: 3,
                    title: "Filters",
                    children: [
                      {
                        to: "/API/API-Reference/Tile-Service/filters",
                        hash: "filters-1",
                        title: "Filters"
                      },
                      {
                        to: "/API/API-Reference/Tile-Service/filters",
                        hash: "arguments",
                        title: "Arguments"
                      },
                      {
                        to: "/API/API-Reference/Tile-Service/filters",
                        hash: "frequently_used_fields",
                        title: "Frequently used fields"
                      },
                      {
                        to: "/API/API-Reference/Tile-Service/filters",
                        hash: "other_fields",
                        title: "Other fields"
                      },
                      {
                        to: "/API/API-Reference/Tile-Service/filters",
                        hash: "count",
                        title: "Count"
                      }
                    ]
                  },
                  {
                    to: "/API/API-Reference/Tile-Service/integration",
                    order: 4,
                    title: "Integration",
                    children: [
                      {
                        to: "/API/API-Reference/Tile-Service/integration",
                        hash: "example",
                        title: "Example"
                      }
                    ]
                  }
                ],
                title: "Tile Service"
              }
            ],
            title: "API Reference"
          },
          {
            order: 2,
            path: "Integrator-FAQ",
            children: [
              {
                to: "/API/Integrator-FAQ/integrator-faq",
                order: 6,
                title: "Integrator FAQ",
                children: [
                  {
                    to: "/API/Integrator-FAQ/integrator-faq",
                    hash: "car",
                    title: "Car"
                  },
                  {
                    to: "/API/Integrator-FAQ/integrator-faq",
                    hash: "stations",
                    title: "Stations"
                  },
                  {
                    to: "/API/Integrator-FAQ/integrator-faq",
                    hash: "routes",
                    title: "Routes"
                  },
                  {
                    to: "/API/Integrator-FAQ/integrator-faq",
                    hash: "tile-service",
                    title: "Tile Service"
                  }
                ]
              }
            ],
            title: "Integrator FAQ"
          },
          {
            order: 3,
            path: "Release-Notes",
            children: [
              {
                to: "/API/Release-Notes/release-notes",
                order: 1,
                title: "Release notes",
                children: [
                  {
                    to: "/API/Release-Notes/release-notes",
                    hash: "3.2.0---tile-service-filter",
                    inset: false,
                    title: "3.2.0 - Tile Service Filter"
                  },
                  {
                    to: "/API/Release-Notes/release-notes",
                    hash: "3.1.0---ocpi-2.2-support",
                    inset: false,
                    title: "3.1.0 - OCPI 2.2 Support"
                  },
                  {
                    to: "/API/Release-Notes/release-notes",
                    hash: "3.0.1---ocpi-2.1.1-support",
                    inset: false,
                    title: "3.0.1 - OCPI 2.1.1 Support"
                  },
                  {
                    to: "/API/Release-Notes/release-notes",
                    hash: "3.0.0---generation-3-of-the-chargetrip-api",
                    inset: false,
                    title: "3.0.0 - Generation 3 of the Chargetrip API"
                  }
                ]
              }
            ],
            title: "Release Notes"
          }
        ],
        title: "API"
      },
      {
        title: "Tools",
        children: [
          {
            title: "Playground",
            href: "https://playground.chargetrip.com/",
            arrow: true
          },
          {
            title: "Voyager",
            href: "https://voyager.chargetrip.com/",
            arrow: true
          },
          {
            title: "Dashboard",
            href: "https://account.chargetrip.com",
            arrow: true
          },
          {
            title: "Examples",
            href: "https://chargetrip.com/examples/",
            arrow: true
          }
        ]
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
