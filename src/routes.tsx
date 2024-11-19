import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { HomePage } from "./home";
import * as Component from "./components";
import * as Example from "./examples"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "components/alert",
        element: <Component.Alert />,
      },
      {
        path: "components/alert-dialog",
        element: <Component.AlertDialog />,
      },
      {
        path: "components/button",
        element: <Component.Button />,
      },
      {
        path: "components/menu-button",
        element: <Component.MenuButton />,
      },
      {
        path: "components/modal",
        element: <Component.Modal />,
      },
      {
        path: "components/radio-group",
        element: <Component.RadioGroup />,
      },
      {
        path: "examples/forms",
        element: <Example.FormsExample />,
      },
    ],
  },
]);
