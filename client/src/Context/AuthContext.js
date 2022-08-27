import { createContext } from "react";

export const AuthContext = createContext({
  token: null,
  userId: null,
  logIn: (arg1, arg2) => {},
  logOut: () => {},
  isAuthentication: false,
});
