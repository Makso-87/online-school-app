import classes from './PupilsPage.module.scss';
import { UsersList } from '../CommonComponents/UsersList/UsersList';
import { Link } from 'react-router-dom';
import { useCurrentRoutPath } from '../../hooks/useCurrentRoutPath';
import UsersStore from '../../store/usersStore';

export const PupilsPage = (props) => {
  const { pupils } = UsersStore;
  const path = useCurrentRoutPath();

  return (
    <div className={classes.PupilsPage}>
      <div className={classes.SiteWrap}>
        <Link to={`${path}/createPupil`} className={classes.Button}>
          Добавить ученика
        </Link>

        <UsersList list={pupils} />
      </div>
    </div>
  );
};
