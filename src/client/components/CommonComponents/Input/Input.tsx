import classes from "./Input.module.scss";
import { InputInterface } from "../../../interfaces/interfaces";

export const Input = (props: InputInterface) => {
  const {
    id = "",
    type = "text",
    value = "",
    placeholder = "",
    name = "",
    onInput = () => {},
    onChange = () => {},
  } = props;

  return (
    <input
      id={id}
      onInput={onInput}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      className={classes.Input}
      name={name}
    />
  );
};
