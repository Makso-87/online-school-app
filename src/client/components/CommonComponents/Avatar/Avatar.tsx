import classes from "./Avatar.module.scss";

export const Avatar = (props) => {
  const { img = "" } = props;

  return (
    <div className={classes.Avatar}>
      <figure>
        <div className={classes.ImgContainer}>
          <div
            className={classes.Img}
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      </figure>
    </div>
  );
};
