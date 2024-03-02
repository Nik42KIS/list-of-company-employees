import s from './Header.module.scss';
import FILTER_IMG from '../../assets/icons/filter.png';
import { useState } from 'react';
import { useActions } from '../../hooks/useActions';


export const Header = () => {
  const [activeClass, setActiveClass] = useState('all');
  const {getEmployersList} = useActions()
  const handleActiveClass = (item) => {
    getEmployersList(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${item}`)
    setActiveClass(item);
  };

  return (
    <header className={s.wrap}>
      <h1 className={s.title}>Search</h1>
      <div className={s.input_wrap}>
        <input placeholder="Write name, tag, email..." type="text" className={s.input} />
        <button className={s.filter_btn}>
          <img src={FILTER_IMG} alt="Filter" />
        </button>
      </div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li
            onClick={() => handleActiveClass('all')}
            className={`${s.list_item} ${activeClass === 'all' ? s.active : ''}`}>
            <a href="#">All</a>
          </li>
          <li
            onClick={() => handleActiveClass('design')}
            className={`${s.list_item} ${activeClass === 'design' ? s.active : ''}`}>
            <a href="#">Designers</a>
          </li>
          <li
            onClick={() => handleActiveClass('analytics')}
            className={`${s.list_item} ${activeClass === 'analytics' ? s.active : ''}`}>
            <a href="#">Analysts</a>
          </li>
          <li
            onClick={() => handleActiveClass('management ')}
            className={`${s.list_item} ${activeClass === 'management ' ? s.active : ''}`}>
            <a href="#">Managers</a>
          </li>
          <li
            onClick={() => handleActiveClass('ios')}
            className={`${s.list_item} ${activeClass === 'ios' ? s.active : ''}`}>
            <a href="#">iOS</a>
          </li>
          <li
            onClick={() => handleActiveClass('android')}
            className={`${s.list_item} ${activeClass === 'android' ? s.active : ''}`}>
            <a href="#">Android</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
