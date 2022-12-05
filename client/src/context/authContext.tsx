import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({
  currentUser: null,
  login: (userData: any) => {},
  //   logout: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const login = async (userData: any) => {
    const res = await axios.post("http://localhost:8800/api/login", userData, {
      withCredentials: true,
    });
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
