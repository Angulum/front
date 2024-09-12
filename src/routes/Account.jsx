import React, { useState } from "react";
import {
  ChevronLeftIcon,
  DoorClosed,
  LogInIcon,
  LogOutIcon,
} from "lucide-react";
import { AccountGeneral } from "../components/account/General";
import { AccountEstates } from "../components/account/Estates";
import { AccountSecurity } from "../components/account/Security";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export const Account = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="max-w-full w-full h-full max-h-screen flex">
      <div className="h-[100vh] w-[300px] border-r border-black/10 flex flex-col justify-between ">
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

              <li>
                <button
                  onClick={() => handleTabChange("security")}
                  className={cn(
                    "hover:bg-[#FAFAFA] px-7 py-3 w-full text-left",
                    {
                      "bg-[#FAFAFA] font-semibold": activeTab === "security",
                    }
                  )}
                >
                  Seguridad
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="p-7">
          <button className="px-7 py-2 font-semibold bg-red-500 rounded-md text-whit flex items-center text-white justify-center gap-2 w-full">
            <LogOutIcon className="w-5 h-5" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full border-b border-black/10 h-20 flex items-center px-10"></div>

        <div className="p-12">
          {activeTab === "general" && <AccountGeneral />}
          {activeTab === "estates" && <AccountEstates />}
          {activeTab === "security" && <AccountSecurity />}
        </div>
      </div>
    </main>
  );
};
