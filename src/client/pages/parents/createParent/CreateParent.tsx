import { useEffect } from 'react';
import PageStore from '../../../store/pageStore';
import { CreateParentPage } from '../../../components/CreateParentPage/CreateParentPage';

export const CreateParent = () => {
  const { setCurrentPage } = PageStore;
  useEffect(() => {
    setCurrentPage({
      slug: 'add_new_parent',
      title: 'Добавление нового родителя',
    });
  }, []);

  return <CreateParentPage />;
};
