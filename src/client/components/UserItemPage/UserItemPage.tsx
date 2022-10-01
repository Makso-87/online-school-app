import { useParams } from "react-router-dom";
import classes from "./UserItemPage.module.scss";
import UsersStore from "../../store/usersStore";
import PageStore from "../../store/pageStore";
import { UserData } from "../../store/userStore";

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
  } = currentUser || {};

  console.log("page", currentPage);

  return (
    <div className={classes.UserItemPage}>
      <div className={classes.SiteWrap}>
        <div className={classes.Avatar}>
          <figure>
            <div className={classes.ImgContainer}>
              <div
                className={classes.Img}
                style={{ backgroundImage: `url(${avatar})` }}
              />
            </div>
          </figure>
        </div>

        <div className={classes.Field}>
          <div className={classes.Key}>ID:</div>
          <div className={classes.Value}>{id}</div>
        </div>

        <div className={classes.Field}>
          <div className={classes.Key}>E-mail:</div>
          <div className={classes.Value}>{email}</div>
        </div>

        <div className={classes.Field}>
          <div className={classes.Key}>Имя:</div>
          <div className={classes.Value}>{firstName}</div>
        </div>

        <div className={classes.Field}>
          <div className={classes.Key}>Фамилия:</div>
          <div className={classes.Value}>{lastName}</div>
        </div>

        <div className={classes.Field}>
          <div className={classes.Key}>Отчество:</div>
          <div className={classes.Value}>{middleName}</div>
        </div>
      </div>
    </div>
  );
};
