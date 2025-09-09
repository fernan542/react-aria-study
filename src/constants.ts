type Component = {
  name: string;
  path: string;
  roles: string[];
  properties: string[];
  states: string[];
  examples?: Map<string, string>;
};

export const COMPONENTS: Component[] = [
  {
    name: "Alert",
    path: "/components/alert",
    roles: ["alert"],
    properties: ["aria-live"],
    states: [],
    examples: new Map([["Animated Alerts", "/examples/animated-alerts"]]),
  },
  {
    name: "Button",
    path: "/components/button",
    roles: ["button"],
    properties: [],
    states: ["aria-disabled", "aria-pressed"],
  },
  {
    name: "Menu Button",
    path: "/components/menu-button",
    roles: ["menu", "menuitem"],
    properties: ["aria-haspopup", "aria-controls", "aria-labelledby"],
    states: ["aria-expanded"],
  },
  {
    name: "Tabs",
    path: "/components/tabs",
    roles: ["tablist", "tab", "tabpanel"],
    properties: ["aria-controls", "aria-labelledby"],
    states: ["aria-selected"],
  },
];
