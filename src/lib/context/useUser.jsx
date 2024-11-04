/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? storedToken : null;
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchUser = async () => {
      if (token) {
        try {
          const response = await fetch(
            import.meta.env.VITE_BACKEND_URL + "/user/get/self",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const userData = await response.json();
            setUser({
              token,
              ...userData,
            });
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);

          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchUser().finally(() => setLoading(false));
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    window.location.href = "/";
  };

  const role = () => {
    return user?.role;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ token, user, login, role, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
