import React, { useEffect } from 'react';
import { AdminPanelPage } from '../../components/AdminPanelPage/AdminPanelPage';
import PageStore from '../../store/pageStore';

export const AdminPanel = () => {
  const { setCurrentPage, setCurrentCategory } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: 'admin_panel', title: 'Панель администратора' });
    setCurrentCategory({ slug: 'admin', title: 'Администратор' });
  }, []);

  return <AdminPanelPage />;
};
