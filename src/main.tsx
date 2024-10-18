import React from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
