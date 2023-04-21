import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = async () => {
    try {
      console.log("check auth");
      if (!isAuth) {
        // check if user is not already authenticated
        const response = await axios.post("/auth/user/current-user");
        if (response.data.message !== "Invalid token") {
          console.log("setAuth true");
          setIsAuth(true);
          setUserInfo(response.data);
        }
      }
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
