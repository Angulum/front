import { useEffect, useState } from "react";
import { router } from "./main";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./lib/context/useUser";
import Maintenance from "./Maintenance";
import { BlockUIProvider } from "./lib/context/useBlockUI";
import { ThemeProvider } from "./lib/context/useTheme";
import { LanguageProvider } from "./lib/context/useLang";

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const checkFrontendStatus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/services`
        );
        const data = await response.json();
        if (data.front) {
          setIsEnabled(true);
        } else {
          setIsEnabled(false);
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
      <ThemeProvider>
        <LanguageProvider>
          <BlockUIProvider>
            <RouterProvider router={router} />
          </BlockUIProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default RootComponent;
