import { PupilsPage } from '../../components/PupilsPage/PupilsPage';
import PageStore from '../../store/pageStore';
import { useEffect } from 'react';
import UsersStore from '../../store/usersStore';
import { graphQLClient } from '../../helpers/graphQlClient';
import { usersByType } from '../../graphql/queries/usersByType';

export const Pupils = () => {
  const { setCurrentPage, setCurrentCategory } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: 'pupils', title: 'Ученики' });
    setCurrentCategory({ slug: 'pupils', title: 'Ученики' });
    const { pupils } = UsersStore;

    if (!pupils.length) {
      graphQLClient
        .request(usersByType, {
          input: { type: 'pupil' },
        })
        .then(({ usersByType: users }) => {
          UsersStore.setPupils(users);
        });
    }
  }, []);

  return <PupilsPage />;
};
