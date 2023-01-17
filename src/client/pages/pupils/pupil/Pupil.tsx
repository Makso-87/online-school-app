import { UserItemPage } from '../../../components/UserItemPage/UserItemPage';
import { useEffect } from 'react';
import PageStore from '../../../store/pageStore';

export const Pupil = () => {
  useEffect(() => {
    PageStore.setCurrentPage({ slug: 'pupil', title: 'Карточка ученика' });
  }, []);

  return <UserItemPage />;
};
