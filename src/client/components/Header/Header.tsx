import React, { FormEvent } from "react";
import classes from "./Header.module.scss";
import { graphQLClient } from "../../helpers/graphQlClient";
import { signOutUser } from "../../graphql/mutations/signOutUser";
import AuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../helpers/cookies";
import { AccountData } from "./AccountData/AccountData";
import PageStore from "../../store/pageStore";
import { observer } from "mobx-react";

export const Header = observer(() => {
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
  const { currentPage } = PageStore;

  return (
    <header className={classes.Header}>
      <h1>{currentPage.title}</h1>
      <div className={classes.AccountData}>
        <AccountData />
        <button onClick={onLogoutClick} className={classes.LogOut}>
          Выйти
        </button>
      </div>
    </header>
  );
});
