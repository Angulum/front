import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OverviewButton from "../overview/hero/OverviewButton";

const Avatar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");

  const hasToken = () => {
    return localStorage.getItem("token") !== null;
  };

  useEffect(() => {
    if (hasToken()) {
      setIsLogged(true);
      const name = localStorage.getItem("userName"); 
      if (name) {
        setUserName(name);
      }
    } else {
      setIsLogged(false);
    }
  }, []);


  return (
    <div>
      {isLogged ? (
        <div
          className="w-10 h-10 rounded-full  
            inline-flex items-center justify-center  
            bg-[#F5F5F5] font-semibold border border-black/20"
        >
          {userName.charAt(0).toUpperCase()}
        </div>
      ) : (
        <Link to={("/login")}>
          <OverviewButton 
            label="Iniciar sesión"
            icon={""}
          >
          </OverviewButton>
        </Link>
      )}
    </div>
  );
};

export default Avatar;
