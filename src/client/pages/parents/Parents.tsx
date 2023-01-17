import { ParentsPage } from '../../components/ParentsPage/ParentsPage';
import PageStore from '../../store/pageStore';
import { useEffect } from 'react';
import UsersStore from '../../store/usersStore';
import { graphQLClient } from '../../helpers/graphQlClient';
import { usersByType } from '../../graphql/queries/usersByType';

export const Parents = () => {
  const { setCurrentPage, setCurrentCategory } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: 'parents', title: 'Родители' });
    setCurrentCategory({ slug: 'parents', title: 'Родители' });

    const { parents, setParents } = UsersStore;

    if (!parents.length) {
      graphQLClient
        .request(usersByType, {
          input: { type: 'parent' },
        })
        .then(({ usersByType: users }) => {
          setParents(users);
        });
    }
  }, []);

  return <ParentsPage />;
};
