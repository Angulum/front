import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useUser } from "../../lib/context/useUser";
import Skeleton from "../ui/Skeleton";

import { useLanguage } from "../../lib/context/useLang";
import { translations } from "../../lib/translations";

const Avatar = () => {
  const { language } = useLanguage();

  const { user, loading } = useUser();
  const navigate = useNavigate();

  if (loading) return <Skeleton className="w-10 h-10 rounded-full" />;

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <>
          {user.role === "ADMIN" && (
            <Button
              variant="secondary"
              onClick={() => handleNavigation("/admin")}
            >
              {translations[language].goAdmin}
            </Button>
          )}
          {user.role === "REALTOR" && (
            <Button
              variant="secondary"
              onClick={() => handleNavigation("/sell")}
            >
              {translations[language].addRealEstate}
            </Button>
          )}
          {user.role === "USER" && (
            <Button
              variant="secondary"
              onClick={() => handleNavigation("/account")}
            >
              {translations[language].account}
            </Button>
          )}
          <div
            className="w-10 h-10 rounded-full  
              inline-flex items-center justify-center  
              bg-[#F5F5F5] font-semibold border border-black/20"
          >
            {user.name.charAt(0).toUpperCase()}
          </div>
        </>
      ) : (
        <Button variant="secondary" onClick={() => handleNavigation("/login")}>
          {translations[language].login}
        </Button>
      )}
    </div>
  );
};

export default Avatar;
