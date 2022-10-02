import classes from "./Field.module.scss";
import { FieldInterface } from "../../../interfaces/interfaces";

export const Field = ({ name, value }: FieldInterface) => {
  return (
    <div className={classes.Field}>
      <div className={classes.Name}>{name}:</div>
      <div className={classes.Value}>{value}</div>
    </div>
  );
};
