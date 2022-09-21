import { getCookie } from "../helpers/cookies";
import { useEffect } from "react";
import { graphQLClient } from "../helpers/graphQlClient";
import { getMe } from "../graphql/queries/getMe";
import UserStore from "../store/userStore";
import AuthStore from "../store/authStore";

export const useCheckAuth = () => {
  useEffect(() => {
    const authorization = getCookie("authorization");

    graphQLClient
      .request(getMe)
      .then(({ me }) => {
        const { id, ...rest } = me;
        const userData = { ...rest };

        UserStore.setUserData(userData);
        AuthStore.logIn(authorization, id);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
};
