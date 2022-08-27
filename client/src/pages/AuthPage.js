import React, { useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../Context/AuthContext";

export const AuthPage = () => {
  const message = useMessage();
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();
  const [form, setFrom] = useState({ email: "", password: "" });
  const inputHandler = (event) => {
    setFrom({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (error) {
      message(error);
      clearError();
    }
  }, [error, message, clearError]);

  const requestHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      message(data.message);
      auth.logIn(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div>
      <div>
        <h1>Авторизация</h1>

        <form action="">
          <div>
            <input
              type="text"
              name="email"
              placeholder="Введите E-mail"
              onChange={inputHandler}
              autoFocus={true}
            />
            <input
              type="text"
              name="password"
              placeholder="Ведите пароль"
              onChange={inputHandler}
            />
          </div>

          <div>
            <button onClick={loginHandler} disabled={loading}>
              Войти
            </button>
            <button onClick={requestHandler} disabled={loading}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
