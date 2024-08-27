import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Overview from "./routes/Overview";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ChangePassword from "./routes/ChangePassword";
import Buy from "./routes/Buy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
