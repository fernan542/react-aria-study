type Component = {
  name: string
  path: string
  roles: string[]
  properties: string[]
  states: string[]
}

export const COMPONENTS: Component[] = [
  {
    name: "Alert",
    path: "/components/alert",
    roles: ['alert'],
    properties: ['aria-live'],
    states: [],
  },
  {
    name: "Button",
    path: "/components/button",
    roles: ['button'],
    properties: [],
    states: ['aria-disabled', 'aria-pressed'],
  },
  {
    name: "Menu Button",
    path: "/components/menu-button",
    roles: ['menu', 'menuitem'],
    properties: ['aria-haspopup', 'aria-controls', 'aria-labelledby'],
    states: ['aria-expanded'],
  },
];
