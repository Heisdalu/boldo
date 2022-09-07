import style from "./TeamBlog.module.css";
import TeamBlogSlide from "./TeamBlogSlide";
import { teamData } from "../../../data";

const TeamBlog = () => {
  return (
    <section className={style.teamBlog}>
      <div className={style.header}>
        <h1 className={style.headerTitle}>Our Blog</h1>
        <p className={style.headerText}>
          Value proposition accelerator product management venture
        </p>
      </div>

      <div className={style.blogWrapper}>
        {/* <TeamBlogSlide /> */}
        {/* <TeamBlogSlide /> */}
        {teamData.map((el, i) => (
          <TeamBlogSlide
            image={el.bgPic}
            title={el.title}
            profilePic={el.profilePic}
            name={el.name}
          />
        ))}

        <button className={style.loadBtn}>Load More</button>
      </div>
    </section>
  );
};

export default TeamBlog;
