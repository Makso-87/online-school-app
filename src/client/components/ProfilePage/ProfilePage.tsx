import classes from "./ProfilePage.module.scss";
import { Avatar } from "../CommonComponents/Avatar/Avatar";
import { Input } from "../CommonComponents/Input/Input";
import { useState } from "react";
import UserStore from "../../store/userStore";
import { Button } from "../CommonComponents/Button/Button";
import { Field } from "../CommonComponents/Field/Field";
import { graphQLClient } from "../../helpers/graphQlClient";
import { updateUser } from "../../graphql/mutations/updateUser";
import { observer } from "mobx-react";

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
  const [isFormChanged, setIsFormChanged] = useState(false);

  const onInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setIsFormChanged(true);
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

  return (
    <div className={classes.ProfilePage}>
      <div className={classes.SiteWrap}>
        <Avatar img={""} />

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
    </div>
  );
});
