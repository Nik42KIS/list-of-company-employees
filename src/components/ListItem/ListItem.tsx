import React from 'react';
import s from './List.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const ListItem = () => {
  const users = useSelector((store) => store.employers);
  // const dispatch = useDispatch();
  console.log('users', users);
  axios
    .get(
      'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all',
    )
    .then((res) => console.log(res));

  return <ul></ul>;
};
