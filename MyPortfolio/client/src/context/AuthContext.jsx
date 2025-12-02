import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });

  // Login function
  const signin = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  // Logout function
  const signout = () => {
    setUser(null);
    setToken("");

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
