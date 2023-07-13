import React, { FormEvent, useEffect, useState } from 'react';
import { graphQLClient } from '../../helpers/graphQlClient';
import { signInUser } from '../../graphql/mutations/signInUser';
import { setCookie } from '../../helpers/cookies';
import AuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';
import classes from './Auth.module.scss';
import { Button } from '../CommonComponents/Button/Button';
import { Input } from '../CommonComponents/Input/Input';
import userStore from '../../store/userStore';
import { getMe } from '../../graphql/queries/getMe';

export const Auth = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
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

      setCookie('authorization', token.hash);
      logIn(token.hash, id);

      graphQLClient
        .request(getMe)
        .then(({ me }) => {
          const { id, ...rest } = me;
          const userData = { ...rest, id };

          userStore.setUserData(userData);
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={classes.Auth}>
      <div className={classes.FormContainer}>
        <h1>Авторизация</h1>

        <form action='src/client/pages/authPage/AuthPage#'>
          <Input
            onInput={onInput}
            type='email'
            placeholder='E-mail'
            name='email'
            value={form.email}
          />

          <Input
            onInput={onInput}
            type='password'
            placeholder='Пароль'
            name='password'
            value={form.password}
          />

          <div>
            <Button onClick={onButtonClick} text='Войти' />
          </div>
        </form>
      </div>
    </div>
  );
};
