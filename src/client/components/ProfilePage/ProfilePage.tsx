import { useState } from "react";
import { observer } from "mobx-react";
import classes from "./ProfilePage.module.scss";
import { Avatar } from "../CommonComponents/Avatar/Avatar";
import { Input } from "../CommonComponents/Input/Input";
import UserStore from "../../store/userStore";
import { Button } from "../CommonComponents/Button/Button";
import { Field } from "../CommonComponents/Field/Field";
import { graphQLClient } from "../../helpers/graphQlClient";
import { updateUser } from "../../graphql/mutations/updateUser";
import { updateUserPassword } from "../../graphql/mutations/updateUserPassword";
import { diff } from "deep-object-diff";

export const ProfilePage = observer(() => {
  const { avatar, email, firstName, lastName, middleName, phoneNumber, id } =
    UserStore;

  const [form, setForm] = useState({
    avatar,
    firstName,
    lastName,
    middleName,
    phoneNumber,
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isFormPasswordChanged, setIsFormPasswordChanged] = useState(false);

  const onInput = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);

    const diffResult = diff(
      { avatar, firstName, lastName, middleName, phoneNumber },
      newForm
    );

    if (Object.keys(diffResult).length) {
      setIsFormChanged(true);
    } else {
      setIsFormChanged(false);
    }
  };

  const onPasswordInput = (event) => {
    setPasswordForm({
      ...passwordForm,
      [event.target.name]: event.target.value,
    });

    if (
      event.target.value === "" &&
      (passwordForm.currentPassword === "" || passwordForm.newPassword === "")
    ) {
      setIsFormPasswordChanged(false);
    } else {
      setIsFormPasswordChanged(true);
    }
  };

  const onButtonClick = async (event) => {
    event.preventDefault();

    graphQLClient
      .request(updateUser, {
        input: { ...form, id },
      })
      .then(({ updateUser: updatedUser }) => {
        const { setUserData, ...user } = UserStore;
        setUserData({ ...user, ...updatedUser });
        setIsFormChanged(false);
      })
      .catch((e) => console.error("[Update user]", e));
  };

  const onSaveNewPassword = (event) => {
    event.preventDefault();
    graphQLClient
      .request(updateUserPassword, {
        input: {
          id,
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        },
      })
      .then(({ updateUserPassword: updatedUserPassword }) => {
        setIsFormPasswordChanged(false);
      });
  };

  return (
    <div className={classes.ProfilePage}>
      <div className={classes.SiteWrap}>
        <Avatar img={""} allowChange={true} />

        <div className={classes.Forms}>
          <div className={classes.FormContainer}>
            <form action="#">
              <Field name="E-mail" value={email} />

              <Input
                onInput={onInput}
                type="text"
                name="firstName"
                id="firstName"
                label="Имя"
                value={form.firstName}
                placeholder="Добавьте Ваше имя"
              />

              <Input
                onInput={onInput}
                type="text"
                name="lastName"
                id="lastName"
                label="Фамилия"
                value={form.lastName}
                placeholder="Добавьте Вашу фамилию"
              />

              <Input
                onInput={onInput}
                type="text"
                name="middleName"
                id="middleName"
                label="Отчество"
                value={form.middleName}
                placeholder="Добавьте Ваше отчество"
              />

              <Input
                onInput={onInput}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                label="Номер телефона"
                value={form.phoneNumber}
                placeholder="Добавьте Ваш номер телефона"
              />

              <Button
                text="Сохранить"
                onClick={onButtonClick}
                disabled={!isFormChanged}
              />
            </form>
          </div>

          <div className={classes.FormContainer}>
            <h2>Изменить пароль</h2>

            <form action="#">
              <Input
                onInput={onPasswordInput}
                type="password"
                name="currentPassword"
                id="currentPassword"
                label="Введите текущий"
                value={passwordForm.currentPassword}
                placeholder="Введите текущий пароль"
              />

              <Input
                onInput={onPasswordInput}
                type="password"
                name="newPassword"
                id="newPassword"
                label="Введите новый"
                value={passwordForm.newPassword}
                placeholder="Введите новый пароль"
              />

              <Button
                text="Сохранить"
                onClick={onSaveNewPassword}
                disabled={!isFormPasswordChanged}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});
