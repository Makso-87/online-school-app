import React from "react";
import { useRoutes } from "../../routes/routes";
import { observer } from "mobx-react";
import AuthStore from "../../store/authStore";

export const AppRoutes = observer(() => {
  const { isAuthentication } = AuthStore;
  return useRoutes(isAuthentication);
});
