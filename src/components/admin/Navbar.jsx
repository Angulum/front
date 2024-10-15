import Logo from "../ui/Logo";

const AdminNavbar = () => {
  return (
    <nav className="w-full bg-white shadow-md items-center p-4 flex">
      <Logo />
      <ul className="flex gap-12 ml-12">
        <li>Dashboard</li>
        <li>Publicaciones</li>
        <li>Usuarios</li>
        <li>Configuración</li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
