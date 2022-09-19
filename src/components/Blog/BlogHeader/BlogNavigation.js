import style from "./BlogNavigation.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import Hamburger from "../../../assets/Hamburger.svg";

const BlogNavigation = () => {
  window.addEventListener("click", (e) => {
    const clicked = e.target.closest(`.${style.hamburger}`);
    if (!clicked) return;

    // show navbar and make hamburger active
    clicked.classList.toggle(`${style.active}`);
    document
      .querySelector(`.${style.navigation}`)
      .classList.toggle(`${style.show}`);
  });

  return (
    <div className={style.navigationContainer}>
      <Logo value={false} />
      <nav className={style.navigation}>
        <Link to="/blog">Blog</Link>
        <a href="#.com">Products</a>
        <Link to="/about">About</Link>
        <button>Log in</button>
      </nav>
      <button className={style.hamburger} arial-hidden="true">
        <img src={Hamburger} alt="toggle btn" />
      </button>
    </div>
  );
};

export default BlogNavigation;
