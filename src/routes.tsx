import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import * as Component from "./components";
import * as Example from "./examples";
import { HomePage } from "./home/home-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    handle: HomePage.handle,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "components",
        children: [
          {
            path: "alert",
            element: <Component.Alert />,
            handle: Component.Alert.handle,
          },
          {
            path: "alert-dialog",
            element: <Component.AlertDialog />,
            handle: Component.AlertDialog.handle,
          },
          {
            path: "button",
            element: <Component.Button />,
            handle: Component.Button.handle,
          },
          {
            path: "menu-button",
            element: <Component.MenuButton />,
            handle: Component.MenuButton.handle,
          },
          {
            path: "modal",
            element: <Component.Modal />,
            handle: Component.Modal.handle,
          },
          {
            path: "radio-group",
            element: <Component.RadioGroup />,
            handle: Component.RadioGroup.handle,
          },
          {
            path: "tabs",
            element: <Component.Tabs />,
            handle: Component.Tabs.handle,
          },
        ],
      },
      {
        path: "examples",
        children: [
          {
            path: "animated-alerts",
            element: <Example.AnimatedAlerts />,
            handle: Example.AnimatedAlerts.handle,
          },
          {
            path: "basic-form",
            element: <Example.BasicForm />,
            handle: Example.BasicForm.handle,
          },
        ],
      },
    ],
  },
]);
