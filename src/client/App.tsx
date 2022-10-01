import React from "react";
import "../client/css/normalize.css";
import "../client/css/globals.css";
import "../client/css/fonts.css";
import "../client/css/styleVariables.scss";
import AuthStore from "./store/authStore";
import { useCheckAuth } from "./hooks/checkAuth.hook";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";

const App = () => {
  useCheckAuth();
  console.log("app");
  console.log("token", AuthStore.token);

  return <AppRoutes />;
};

export default App;
