import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../lib/context/useUser";
import NewProperties from "./NewProperties";

const SellerWrapper = ({ children }) => {
  
  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!user){
      navigate("/");
    }

    if (user && user.role == "REALTOR" ||user && user.role == "ADMIN") {
      navigate("/sell");
    } else {
      navigate("/");
    }
  }, [user, navigate, loading]);

  if (loading) return null;
  

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <NewProperties />
      {children}
    </div>
  );
};

export default SellerWrapper;