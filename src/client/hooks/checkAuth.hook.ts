import { getCookie } from '../helpers/cookies';
import { useEffect, useState } from 'react';
import { graphQLClient } from '../helpers/graphQlClient';
import { getMe } from '../graphql/queries/getMe';
import UserStore from '../store/userStore';
import AuthStore from '../store/authStore';

export const useCheckAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const authorization = getCookie('authorization');
    console.log('useCheckAuth отрисовался');
    if (!!authorization) {
      graphQLClient
        .request(getMe)
        .then(({ me }) => {
          const { id, ...rest } = me;
          const userData = { ...rest, id };

          UserStore.setUserData(userData);
          AuthStore.logIn(authorization, id);
          setIsAuthorized(true);
        })
        .catch((e) => {
          setIsAuthorized(false);
          console.error(e);
        });
    }
  }, []);

  return isAuthorized;
};
