import style from './Navigation.module.css';
import Logo from '../../Logo/Logo';
import Hamburger from "../../../assets/Hamburger.svg";



const Navigation = () => {
    return (
      <div className={style.navigationContainer}>
        <Logo value={true} />
        <nav className={style.navigation}>
          <a href="#.com">Blog</a>
          <a href="#.com">Products</a>
          <a href="#.com">About</a>
          <button>Log in</button>
        </nav>
        <button className={style.hamburger} arial-hidden="true">
          <img src={Hamburger} alt="toggle btn" />
        </button>
      </div>
    );
}

export default Navigation;