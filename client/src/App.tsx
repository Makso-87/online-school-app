import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthStore from "./store/authStore";
import { useCheckAuth } from "./hooks/checkAuth.hook";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";

const App = () => {
  useCheckAuth();
  console.log("app");
  console.log("token", AuthStore.token);

  return (
    <BrowserRouter>
      <div>{<AppRoutes />}</div>
    </BrowserRouter>
  );
};

export default App;
