import React, { FormEvent, useEffect, useState } from "react";
import { graphQLClient } from "../../helpers/graphQlClient";
import { signInUser } from "../../graphql/mutations/signInUser";
import { setCookie } from "../../helpers/cookies";
import AuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  const onInput = (event: FormEvent) => {
    const { target }: any = event;

    setForm({ ...form, [target.name]: target.value });
  };

  const onButtonClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { email, password } = form;
      const { logIn } = AuthStore;

      const { signIn } = await graphQLClient.request(signInUser, {
        input: { email, password },
      });

      const { id, token } = signIn;

      setCookie("authorization", token.hash);
      logIn(token.hash, id);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>

      <form action="#">
        <input
          onInput={onInput}
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <input
          onInput={onInput}
          type="password"
          placeholder="Пароль"
          name="password"
        />

        <div>
          <button onClick={onButtonClick}>Войти</button>
        </div>
      </form>
    </div>
  );
};
