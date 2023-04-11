import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const login = async () => {
    try {
      const response = await axios.post("/auth/user/current-user");
      setIsAuth(true);
      setUserInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("/auth/user/logout");
      setIsAuth(false);
      setUserInfo(null);
      alert(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    userInfo,
    setUserInfo,
    isAuth,
    setIsAuth,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
