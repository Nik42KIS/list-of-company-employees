
import s from './Header.module.scss';
import FILTER_IMG from "../../assets/icons/filter.png"
import { useState } from 'react';

export const Header = () => {
  const [activeClass, setActiveClass] = useState('All')

  const handleActiveClass = (item) => {
    setActiveClass(item)
  }

  return (
    <header className={s.wrap}>
      <h1 className={s.title}>Search</h1>
      <div className={s.input_wrap}>
      <input placeholder="Write name, tag, email..." type="text" className={s.input} />
        <button className={s.filter_btn}><img src={FILTER_IMG} alt="Filter" /></button>
      </div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li onClick={()=> handleActiveClass('All')} className={`${s.list_item} ${activeClass === 'All' ? s.active : ''}`}><a href="#">All</a></li>   
          <li onClick={()=> handleActiveClass('Designers')} className={`${s.list_item} ${activeClass === 'Designers' ? s.active : ''}`}><a href="#">Designers</a></li>
          <li onClick={()=> handleActiveClass('Analysts')} className={`${s.list_item} ${activeClass === 'Analysts' ? s.active : ''}`}><a href="#">Analysts</a></li>
          <li onClick={()=> handleActiveClass('Managers')} className={`${s.list_item} ${activeClass === 'Managers' ? s.active : ''}`}><a href="#">Managers</a></li>
          <li onClick={()=> handleActiveClass('iOS')} className={`${s.list_item} ${activeClass === 'iOS' ? s.active : ''}`}><a href="#">iOS</a></li>
          <li onClick={()=> handleActiveClass('Android')} className={`${s.list_item} ${activeClass === 'Android' ? s.active : ''}`}><a href="#">Android</a></li>
        </ul>
      </nav>
    </header>
  );
};
