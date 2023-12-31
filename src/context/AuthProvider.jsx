import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [updateCart, setUpdateCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
    toast.success("logged out successfull");
    setUpdateCart(!updateCart);
  };

  const authInfo = {
    user,
    logout,
    setUser,
    loading,
    updateCart,
    setUpdateCart,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
