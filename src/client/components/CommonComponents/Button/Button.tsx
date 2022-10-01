import classes from "./Button.module.scss";
import { ButtonInterface } from "../../../interfaces/interfaces";

export const Button = (props: ButtonInterface) => {
  const { text, onClick } = props;
  return (
    <button onClick={onClick} className={classes.Button}>
      {text}
    </button>
  );
};
