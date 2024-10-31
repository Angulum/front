import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Overview from "./routes/Overview";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ChangePassword from "./routes/ChangePassword";
import Buy from "./routes/Buy";
import Sell from "./routes/Sell";
import OverviewEstates from "./routes/OverviewEstates";
import { Account } from "./routes/Account";
import AdminLogin from "./components/admin/Login";
import AdminWrapper from "./components/admin/Wrapper";
import Services from "./components/admin/Services";
import Status from "./components/admin/Status";
import Reports from "./components/admin/Reports";
import Logs from "./components/admin/Logs";
import RootComponent from "./RootComponent";

// Configuración de rutas
export const router = createBrowserRouter([
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
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/services",
    element: (
      <AdminWrapper>
        <Services />
      </AdminWrapper>
    ),
  },
  {
    path: "/admin/status",
    element: (
      <AdminWrapper>
        <Status />
      </AdminWrapper>
    ),
  },
  {
    path: "/admin/reports",
    element: (
      <AdminWrapper>
        <Reports />
      </AdminWrapper>
    ),
  },
  {
    path: "/admin/logs",
    element: (
      <AdminWrapper>
        <Logs />
      </AdminWrapper>
    ),
  },
  {
    path: "/buy/:id",
    element: <OverviewEstates />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
