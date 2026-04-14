import { createContext, useContext, useEffect, useState } from "react";

const AuthLoginContext = createContext(null);

export const AuthLoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");

    if (stored) {
      setUser(JSON.parse(stored));
    }

    setLoading(false); 
  }, []);

  return (
    <AuthLoginContext.Provider
      value={{ user, setUser, loading, setLoading, error, setError }}
    >
      {children}
    </AuthLoginContext.Provider>
  );
};

export const useAuth = () => useContext(AuthLoginContext);