import classes from './CreateParentPage.module.scss';
import { Button } from '../CommonComponents/Button/Button';
import { useState } from 'react';
import { Input } from '../CommonComponents/Input/Input';
import { createUser } from '../../graphql/mutations/createUser';
import { graphQLClient } from '../../helpers/graphQlClient';
import UsersStore from '../../store/usersStore';
import { observer } from 'mobx-react';
import passwordGenerate from 'secure-random-password';
import { useNavigate } from 'react-router-dom';
import { useCurrentRoutPath } from '../../hooks/useCurrentRoutPath';

export const CreateParentPage = observer(() => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();
  const path = useCurrentRoutPath();

  const onInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onClick = async (e) => {
    e.preventDefault();
    const password = passwordGenerate.randomPassword();
    console.log('password', password);

    graphQLClient
      .request(createUser, {
        input: { email, password, type: 'parent', roles: ['parent'] },
      })
      .then(async ({ createUser }) => {
        const { parents, setParents } = UsersStore;
        setParents([...parents, createUser]);
        navigate(`${path.replace('/createParent', '')}/parent/${createUser.id}`);
      })
      .catch((e) => {
        setError(e.message);
        console.error('error', e);
      });
  };

  return (
    <div className={classes.CreateParentPage}>
      <div className={classes.SiteWrap}>
        <form action='#'>
          <label htmlFor='email'>Введите e-mail нового ученика</label>

          <Input onInput={onInput} type='email' placeholder='Email' id='email' value={email} />

          {error ? <div className={classes.Error}>{error}</div> : null}

          <Button text='Добавить родителя' onClick={onClick} />
        </form>
      </div>
    </div>
  );
});
