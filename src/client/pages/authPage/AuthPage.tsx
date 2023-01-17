import React from 'react';
import { Auth } from '../../components/Auth/Auth';
import PageStore from '../../store/pageStore';

export const AuthPage = () => {
  const { setCurrentPage, setCurrentCategory } = PageStore;
  setCurrentPage({ slug: 'auth_page', title: 'Страница авторизации' });
  setCurrentCategory({ slug: '', title: '' });

  return <Auth />;
};
