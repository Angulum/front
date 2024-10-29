import { useState, useEffect } from "react";
import { InactivePage } from "./InactivePage";

const AppWrapper = ({ children }) => {
  const [isFrontendActive, setIsFrontendActive] = useState(true);

  useEffect(() => {
    const checkFrontendStatus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/services`
        );
        const data = await response.json();
        setIsFrontendActive(data.front);
      } catch (error) {
        console.error("Error al verificar el estado del frontend:", error);
        setIsFrontendActive(false);
      }
    };
    checkFrontendStatus();
  }, []);

  return isFrontendActive ? { children } : <InactivePage />;
};

export default AppWrapper;
