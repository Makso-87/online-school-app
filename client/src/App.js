import React from "react";
import { useRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./Context/AuthContext";
import { NavBar } from "./Components/NavBar/NavBar";
import { Loader } from "./Components/Loader/Loader";

const App = () => {
  const { token = null, logIn, logOut, userId = null, ready } = useAuth();
  const isAuthentication = !!token;
  const routes = useRoutes(isAuthentication);

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{ token, logIn, logOut, userId, isAuthentication }}
    >
      <BrowserRouter>
        {isAuthentication ? <NavBar /> : null}
        <div>{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
