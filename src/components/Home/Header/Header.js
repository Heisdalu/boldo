import Logo from "../../Logo/Logo";
import Hamburger from "../../../assets/Hamburger.svg";
import style from "./Header.module.css";
import Illustration from "./Illustration";
import Marquee from "./Marquee";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      {/* navigation  */}
      <div className={style.navigationContainer}>
        <Logo />
        <nav className={style.navigation}>
          <a href="#.com">Blog</a>
          <a href="#.com">Products</a>
          <a href="#.com">About</a>
          <button>Login in</button>
        </nav>
        <button className={style.hamburger} arial-hidden="true">
          <img src={Hamburger} alt="toggle btn" />
        </button>
      </div>

      <div className={style.header}>
        <div className={style.headerMain}>
          <header>
            <h1 className={style.headerTitle}>
              Save time by building fast with Boldo Template{" "}
            </h1>
          </header>
          <p className={style.headerContext}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>


          <div className={style.headerNavigation}>
            <button className={style.buyTemplate}>Buy template</button>
            <button className={style.explore}>Explore</button>
          </div>
        </div>
      </div>

      <Illustration />
      <Marquee />
    </div>
  );
};

export default Header;
