import { useParams } from "react-router-dom";
import classes from "./UserItemPage.module.scss";
import UsersStore from "../../store/usersStore";
import PageStore from "../../store/pageStore";
import { UserData } from "../../store/userStore";
import { Avatar } from "../CommonComponents/Avatar/Avatar";
import { Field } from "../CommonComponents/Field/Field";

export const UserItemPage = () => {
  const { id } = useParams();
  const { currentPage } = PageStore;
  const users = UsersStore[currentPage.slug] || [];
  const [currentUser]: [UserData] = users.filter(
    (user: UserData) => user.id === id
  );

  const {
    avatar = "",
    email = "",
    firstName = "",
    lastName = "",
    middleName = "",
    phoneNumber = "",
  } = currentUser || {};

  console.log("page", currentPage);

  return (
    <div className={classes.UserItemPage}>
      <div className={classes.SiteWrap}>
        <Avatar img={avatar} />

        {/*<Field name="ID" value={id} />*/}

        <Field name="E-mail" value={email} />
        <Field name="Имя" value={firstName} />
        <Field name="Фамилия" value={lastName} />
        <Field name="Отчество" value={middleName} />
        <Field name="Номер телефона" value={phoneNumber} />
      </div>
    </div>
  );
};
