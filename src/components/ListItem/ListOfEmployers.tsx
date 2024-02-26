import { useEffect } from 'react';
import s from './ListOfEmployers.module.scss';

import { useSelector } from 'react-redux';
import { getEmployersList } from '../../employers/employer.actions';
import { useActions } from '../../hooks/useActions';

export const ListOfEmployers = () => {
  const users = useSelector((store) => store.employers.employers);
  const { getEmployersList } = useActions();

  useEffect(() => {
    getEmployersList(
      'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all',
    );
  }, [users]);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <img src={user.avatarUrl} alt="" />
            <div>
              <span>
                {user.firstName} {user.lastName}
              </span>
              <span>
              {user.department}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
