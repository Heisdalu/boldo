import style from "./HomeBlog.module.css";
import BgWebp from "../../../assets/teamBlog.webp";
import BgJpg from "../../../assets/teamBlog.jpg";
import List from "./List";
import TeamBlog from "./TeamBlog";
import { useContext } from "react";
import StoreContext from "../../../store/store-context";

const HomeBlog = () => {
  const { update } = useContext(StoreContext);

  const load = () => {
    update({ type: "ADD", value: 24 });
  };

  return (
    <div className={style.wrapper}>
      <section className={style.HomeBlog}>
        <figure className={style.teamPic}>
          <picture>
            <source srcSet={BgWebp} type="image/webp" />
            <img
              src={BgJpg}
              alt="Two white guys staring at a computer"
              onLoad={load}
            />
          </picture>
        </figure>

        <div className={style.main}>
          <h1 className={style.mainTitle}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          <ul className={style.listBox}>
            <List />
            <List />
          </ul>
        </div>

        <TeamBlog />
      </section>
    </div>
  );
};

export default HomeBlog;
