import { createContext, useState, useEffect } from "react";
import axios from "axios";

type User = {
  email: String;
  password: String;
};

export const AuthContext = createContext({
  currentUser: null,
  login: (userData: User): Promise<void> => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
  //   logout: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const login = async (userData: User): Promise<void> => {
    return axios
      .post("http://localhost:8800/api/login", userData, {
        withCredentials: true,
      })
      .then((res) => {
        setCurrentUser(res.data);
        return;
      });
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
