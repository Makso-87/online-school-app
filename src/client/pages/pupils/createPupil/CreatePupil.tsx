import { useEffect } from 'react';
import PageStore from '../../../store/pageStore';
import { CreatePupilPage } from '../../../components/CreatePupilPage/CreatePupilPage';

export const CreatePupil = () => {
  const { setCurrentPage } = PageStore;
  useEffect(() => {
    setCurrentPage({
      slug: 'add_new_pupil',
      title: 'Добавление нового ученика',
    });
  }, []);

  return <CreatePupilPage />;
};
