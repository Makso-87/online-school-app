import classes from "./UsersList.module.scss";
import { Link } from "react-router-dom";
import { useCurrentRoutPath } from "../../../hooks/useCurrentRoutPath";

export const UsersList = (props) => {
  const { list = [] } = props;
  const path = useCurrentRoutPath();

  return (
    <div className={classes.UsersList}>
      <table>
        <thead>
          <tr key="1">
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Email</th>
            <th>Подробнее</th>
          </tr>
        </thead>

        <tbody>
          {list.length
            ? list.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.middleName}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={`${path}/${item.type}/${item.id}`}>
                        Посмотреть
                      </Link>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};
