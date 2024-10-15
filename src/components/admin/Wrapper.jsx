import AdminNavbar from "./Navbar";

const AdminWrapper = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminWrapper;