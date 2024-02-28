
import s from './Header.module.scss';
import FILTER_IMG from "../../assets/icons/filter.png"

export const Header = () => {
  return (
    <header className={s.wrap}>
      <h1 className={s.title}>Search</h1>
      <div className={s.input_wrap}>
      <input placeholder="Write name, tag, email..." type="text" className={s.input} />
        <button className={s.filter_btn}><img src={FILTER_IMG} alt="Filter" /></button>
      </div>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={`${s.list_item} ${s.active}`}><a href="#">All</a></li>   
          <li className={s.list_item}><a href="#">Designers</a></li>
          <li className={s.list_item}><a href="#">Analysts</a></li>
          <li className={s.list_item}><a href="#">Managers</a></li>
          <li className={s.list_item}><a href="#">iOS</a></li>
          <li className={s.list_item}><a href="#">Android</a></li>
        </ul>
      </nav>
    </header>
  );
};
