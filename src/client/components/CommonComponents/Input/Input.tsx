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
    label = "",
  } = props;

  return (
    <div className={classes.Input}>
      {label !== "" ? <label htmlFor={id}>{label}</label> : null}

      <input
        id={id}
        onInput={onInput}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
