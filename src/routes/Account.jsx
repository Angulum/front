import { useEffect, useState } from "react";
import { ChevronLeftIcon, LogOutIcon } from "lucide-react";
import { AccountGeneral } from "../components/account/General";
import { AccountEstates } from "../components/account/Estates";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../lib/context/useUser";

export const Account = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const { user, logout, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (loading) return null;

  return (
    <main className="max-w-full w-full overflow-hidden h-full max-h-screen flex">
      <div className="sticky h-[100vh] w-[300px] border-r border-black/10 flex flex-col justify-between ">
        <div>
          <div className="h-20 border-b border-black/10 flex items-center px-6">
            <Link to="/" className="flex items-center gap-1 font-semibold">
              <ChevronLeftIcon className="w-5 h-5" />
              <span>Volver</span>
            </Link>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-col">
              <li>
                <button
                  onClick={() => handleTabChange("general")}
                  className={cn(
                    "hover:bg-[#FAFAFA] px-7 py-3 w-full text-left",
                    {
                      "bg-[#FAFAFA] font-semibold": activeTab === "general",
                    }
                  )}
                >
                  General
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange("estates")}
                  className={cn(
                    "hover:bg-[#FAFAFA] px-7 py-3 w-full text-left",
                    {
                      "bg-[#FAFAFA] font-semibold": activeTab === "estates",
                    }
                  )}
                >
                  Propiedades
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="p-7">
          <button
            onClick={logout}
            className="px-7 py-2 font-semibold bg-red-500 rounded-md text-whit flex items-center text-white justify-center gap-2 w-full"
          >
            <LogOutIcon className="w-5 h-5" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>

      <div className="overflow-y-scroll relative w-full">
        <div className="sticky top-0 bg-white z-30 w-full border-b border-black/10 h-20 flex items-center px-10"></div>

        <div className="sticky p-12">
          {activeTab === "general" && <AccountGeneral />}
          {activeTab === "estates" && <AccountEstates />}
        </div>
      </div>
    </main>
  );
};
