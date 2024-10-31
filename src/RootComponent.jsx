import { useEffect, useState } from "react";
import { router } from "./main";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./lib/context/useUser";
import Maintenance from "./Maintenance";

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const checkFrontendStatus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/services`
        );
        const data = await response.json();
        if (data.front) {
          setIsEnabled(true);
        }
      } catch (error) {
        console.error("Error checking frontend status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!window.location.pathname.includes("admin")) {
      checkFrontendStatus();
    } else {
      setIsLoading(false);
      setIsEnabled(true);
    }
  }, []);

  if (isLoading) {
    return null;
  }

  if (!isEnabled) {
    return <Maintenance />;
  }

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default RootComponent;
