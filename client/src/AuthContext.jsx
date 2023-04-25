import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log("i am changing here" + isAuth);
  }, [isAuth]);

  const login = async () => {
    try {
      console.log("check token and setIsAuth and setUserInfo");
      if (!isAuth) {
        // check if user is not already authenticated
        const response = await axios.get("/auth/user/user-data");
        // if (response.data.message !== "Invalid token") {
        console.log(response);
        if (response.data.name) {
          console.log("setIsAuth true");
          setIsAuth(true);
          setUserInfo(response.data);
        }
      }
    } catch (err) {
      console.log("Invalid token");
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
