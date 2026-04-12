import { createContext, useContext, useState } from "react";

const AuthLoginContext = createContext(null);

export const AuthLoginProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AuthLoginContext.Provider
      value={{ user, setUser, loading, setLoading, error, setError }}
    >
      {children}
    </AuthLoginContext.Provider>
  );
};

export const useAuth = () => useContext(AuthLoginContext);