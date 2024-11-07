import AdminNavbar from "./Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../lib/context/useUser";

const AdminWrapper = ({ children }) => {
  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if (user && user.role != "ADMIN") {
      navigate("/login");
    }
  }, [user, navigate, loading]);

  if (loading) return null;

  return (
    <div className="h-screen flex flex-col overflow-scroll">
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminWrapper;
