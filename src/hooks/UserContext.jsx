import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (data) => {
    setUserInfo(data);
    localStorage.setItem("devburger:userData", JSON.stringify(data));

    if (data?.token) {
      localStorage.setItem("devburger:token", data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    }
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("devburger:userData");
    localStorage.removeItem("devburger:token");
    delete api.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("devburger:userData") || "{}");
      setUserInfo(storedUser);

      const storedToken = localStorage.getItem("devburger:token");
      if (storedToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      }
    } catch (err) {
      console.error("Erro ao carregar dados do usuário:", err);
      setUserInfo({});
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
