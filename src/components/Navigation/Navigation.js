import style from "./Navigation.module.css";
import Logo from "../Logo/Logo";
import Hamburger from "../../assets/Hamburger.svg";

const Navigation = () => {
  window.addEventListener("click", (e) => {
    const clicked = e.target.closest(`.${style.hamburger}`);
    if (!clicked) {
      // remove all active classes on hamburger and navbar
      document
        .querySelector(`.${style.hamburger}`)
        .classList.remove(`${style.active}`);

      document
        .querySelector(`.${style.navigation}`)
        .classList.remove(`${style.show}`);
      return;
    }

    // show navbar and make hamburger active 
    clicked.classList.toggle(`${style.active}`);
    document
      .querySelector(`.${style.navigation}`)
      .classList.toggle(`${style.show}`);
    // console.log(clicked.c);
  });

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
};

export default Navigation;
