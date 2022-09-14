import style from "./Header.module.css";
import Navigation from "../../Navigation/Navigation";
import Illustration from "./Illustration";
import Marquee from "./Marquee";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <Navigation />

      <section className={style.headerWrapper}>
        <div className={style.header}>
          <div className={style.headerMain}>
            <header className={style.headerTextBox}>
              <h1 className={style.headerTitle}>
                Save time by building fast with Boldo Template
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
      </section>
      <Marquee />
    </div>
  );
};

export default Header;
