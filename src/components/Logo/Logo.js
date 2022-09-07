/* eslint-disable jsx-a11y/anchor-is-valid */
import { BoldoLogo } from "../../assets/Svg";
import style from "./Logo.module.css";

const Logo = (props) => {
  const textColor = props.value ? "#ffffff" : "#0a2640";

  return (
    <a href="#" className={style.logo}>
      <span className={style.logoInner}>
        <BoldoLogo color={props.value} />
      </span>
      <span className={style.logoText} style={{ color: textColor }}>
        Boldo
      </span>
    </a>
  );
};

export default Logo;
