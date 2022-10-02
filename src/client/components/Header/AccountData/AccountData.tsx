import classes from "./AccountData.module.scss";
import userStore from "../../../store/userStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

export const AccountData = observer(() => {
  const { avatar, email, firstName, lastName, type } = userStore;

  return (
    <div className={classes.Avatar}>
      <Link to={`${type}/profile`}>
        <figure>
          <div className={classes.ImgContainer}>
            {avatar ? (
              <div
                className={classes.Img}
                style={{ backgroundImage: `url(${avatar})` }}
              />
            ) : (
              <div className={classes.Initials}>
                <span>
                  {firstName
                    ? firstName[0].toUpperCase()
                    : email[0].toUpperCase()}
                </span>

                <span>
                  {lastName
                    ? lastName[0].toUpperCase()
                    : email[1].toUpperCase()}
                </span>
              </div>
            )}
          </div>

          <figcaption>
            <div className={classes.Name}>
              <span>{firstName}</span>
              <span>{lastName}</span>
            </div>

            <div className={classes.Email}>{email}</div>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
});
