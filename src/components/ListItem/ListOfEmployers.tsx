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
    <ul className={s.list}>
      {users.map((user) => {
        return (
          <li className={s.item} key={user.id}>
            <img className={s.avatar} src={user.avatarUrl} alt="" />
            <div className={s.info}>
              <span className={s.name}>
                <span>
                  {user.firstName} {user.lastName}
                </span>
                <span className={s.tag}>{user.userTag}</span>
              </span>
              <div>
              {user.department}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};