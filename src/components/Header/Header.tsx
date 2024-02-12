import React from 'react';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.wrap}>
      <h1 className={s.title}>Search</h1>
      <input placeholder="write name, tag, email..." type="text" className={s.input} />
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.list_item}>All</li>
          <li className={s.list_item}>Designers</li>
          <li className={s.list_item}>Analysts</li>
          <li className={s.list_item}>Managers</li>
          <li className={s.list_item}>iOS</li>
          <li className={s.list_item}>Android</li>
        </ul>
      </nav>
    </header>
  );
};
