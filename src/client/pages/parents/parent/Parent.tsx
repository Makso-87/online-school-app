import { UserItemPage } from '../../../components/UserItemPage/UserItemPage';
import { useEffect } from 'react';
import PageStore from '../../../store/pageStore';

export const Parent = () => {
  useEffect(() => {
    PageStore.setCurrentPage({ slug: 'parent', title: 'Карточка родителя' });
  }, []);

  return <UserItemPage />;
};
