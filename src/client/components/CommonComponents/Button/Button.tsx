import classes from "./Button.module.scss";
import { ButtonInterface } from "../../../interfaces/interfaces";
import cn from "classnames";

export const Button = (props: ButtonInterface) => {
  const { text, onClick, disabled = false } = props;

  const buttonClasses = cn(classes.Button, {
    [classes.Disabled]: disabled,
  });
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {text}
    </button>
  );
};
