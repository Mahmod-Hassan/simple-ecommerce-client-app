import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  const authInfo = {
    user,
    logout,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
