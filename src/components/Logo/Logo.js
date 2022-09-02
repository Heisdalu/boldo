/* eslint-disable jsx-a11y/anchor-is-valid */
import LogoPic from "../../assets/Logo.svg";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="#" className={style.logo}>
      <span className={style.logoInner}>
        <img src={LogoPic} alt="Boldo logo" />
      </span>
      <span className={style.logoText}>Boldo</span>
    </a>
  );
};

export default Logo;
