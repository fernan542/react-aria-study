import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { HomePage } from "./home";
import {
  AlertDialogExView,
  AlertExView,
  ButtonExView,
  MenuButtonExView,
  ModalDialogExView,
  RadioGroupExView,
} from "./examples";

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
        path: "examples/alert",
        element: <AlertExView />,
      },
      {
        path: "examples/alert-dialog",
        element: <AlertDialogExView />,
      },
      {
        path: "examples/button",
        element: <ButtonExView />,
      },
      {
        path: "examples/menu-button",
        element: <MenuButtonExView />,
      },
      {
        path: "examples/modal-dialog",
        element: <ModalDialogExView />,
      },
      {
        path: "examples/radio-group",
        element: <RadioGroupExView />,
      },
    ],
  },
]);
