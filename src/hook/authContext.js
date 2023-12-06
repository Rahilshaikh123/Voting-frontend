import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedin: false,
  name: "",
  role: "",
  userId: null,
  login: () => {},
  logout: () => {},
});
