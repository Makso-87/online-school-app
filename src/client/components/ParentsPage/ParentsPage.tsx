import classes from './ParentsPage.module.scss';
import { UsersList } from '../CommonComponents/UsersList/UsersList';
import { Link } from 'react-router-dom';
import { useCurrentRoutPath } from '../../hooks/useCurrentRoutPath';
import UsersStore from '../../store/usersStore';

export const ParentsPage = (props) => {
  const { parents } = UsersStore;
  const path = useCurrentRoutPath();

  console.log('parents', parents);

  return (
    <div className={classes.ParentsPage}>
      <div className={classes.SiteWrap}>
        <Link to={`${path}/createParent`} className={classes.Button}>
          Добавить родителя
        </Link>

        <UsersList list={parents} />
      </div>
    </div>
  );
};
