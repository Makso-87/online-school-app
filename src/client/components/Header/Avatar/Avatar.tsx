import classes from "./Avatar.module.scss";
import userStore from "../../../store/userStore";

export const Avatar = () => {
  const { avatar, email, firstName, lastName } = userStore;

  return (
    <div className={classes.Avatar}>
      <figure>
        <div className={classes.ImgContainer}>
          {avatar ? (
            <div
              className={classes.Img}
              style={{ backgroundImage: `url(${avatar})` }}
            />
          ) : (
            <div className={classes.Initials}>
              {firstName ? firstName[0].toUpperCase() : null}
              {lastName ? lastName[0].toUpperCase() : null}
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
    </div>
  );
};
