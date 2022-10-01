import classes from "./Teachers.module.scss";
import { UsersList } from "../CommonComponents/UsersList/UsersList";
import UsersStore from "../../store/usersStore";
import { Link } from "react-router-dom";
import { useCurrentRoutPath } from "../../hooks/useCurrentRoutPath";

export const TeachersPage = (props) => {
  const { teachers } = UsersStore;
  const path = useCurrentRoutPath();

  return (
    <div className={classes.TeachersPage}>
      <div className={classes.SiteWrap}>
        <Link to={`${path}/createTeacher`} className={classes.Button}>
          Добавить учителя
        </Link>

        <UsersList list={teachers} />
      </div>
    </div>
  );
};
