import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { HomePage } from "./home";
import { MenuButtonExView, RadioGroupExView } from "./examples";

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
        path: "examples/menu-button",
        element: <MenuButtonExView />,
      },
      {
        path: "examples/radio-group",
        element: <RadioGroupExView />,
      },
    ],
  },
]);
