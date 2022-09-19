import style from "./Header.module.css";
import Navigation from "../../Navigation/Navigation";

const Header = () => {
  return (
    <div className={style.aboutHeaderWrapper}>
      <div className={style.aboutHeaderMain}>
        <Navigation light={true} />
        <section className={style.aboutHeader}>
          <h1 className={style.title}>
            We love to make great things, things that matter.
          </h1>
          <p className={style.content}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Header;
