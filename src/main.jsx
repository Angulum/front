import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Overview from "./routes/Overview";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ChangePassword from "./routes/ChangePassword";
import Buy from "./routes/Buy";
import Sell from "./routes/Sell";
import OverviewEstates from "./routes/OverviewEstates";
import { Account } from "./routes/Account";
import { UserProvider } from "./lib/context/useUser"; // Asegúrate de importar correctamente
import AdminLogin from "./components/admin/Login";
import AdminWrapper from "./components/admin/Wrapper";
import Services from "./components/admin/Services";
import Status from "./components/admin/Status";
import Reports from "./components/admin/Reports";

// Configuración de rutas
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
    path: "/buy/:id",
    element: <OverviewEstates />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
