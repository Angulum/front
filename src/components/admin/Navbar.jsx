import { useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b border-black/30 items-center p-4 flex">
      <Logo />
      <ul className="flex gap-12 ml-12">
        <li onClick={() => navigate("/admin/users")} className="cursor-pointer">
          Usuarios
        </li>

        <li
          onClick={() => navigate("/admin/status")}
          className="cursor-pointer"
        >
          Estado
        </li>

        <li
          onClick={() => navigate("/admin/services")}
          className="cursor-pointer"
        >
          Servicios
        </li>

        <li
          onClick={() => navigate("/admin/reports")}
          className="cursor-pointer"
        >
          Reportes
        </li>

        <li onClick={() => navigate("/admin/logs")} className="cursor-pointer">
          Logs
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
