import React, { FormEvent } from "react";
import { graphQLClient } from "../../helpers/graphQlClient";
import { signOutUser } from "../../graphql/mutations/signOutUser";
import AuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../helpers/cookies";

export const AdminPanel = () => {
  const navigate = useNavigate();

  const onLogoutClick = async (e: FormEvent) => {
    e.preventDefault();
    const result = await graphQLClient.request(signOutUser);

    if (result) {
      AuthStore.logOut();
      removeCookie("authorization");
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Admin panel</h1>

      <button onClick={onLogoutClick}>Log out</button>
    </div>
  );
};
