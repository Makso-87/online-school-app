import React from 'react';
import { useRoutes } from '../../routes/routes';
import { observer } from 'mobx-react';
import authStore from '../../store/authStore';
import userStore from '../../store/userStore';

export const AppRoutes = observer(() => {
  const { isAuthentication } = authStore;
  return useRoutes(isAuthentication, userStore);
});
