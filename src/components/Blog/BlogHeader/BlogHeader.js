import style from "./BlogHeader.module.css";
import Navigation from "../../Navigation/Navigation";
import pic from "../../../assets/BlogPic.png";
import aviPic from '../../../assets/daytonPic.png'

const BlogHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.blogNavBar}>
        <Navigation />
      </div>

      <section className={style.main}>
        <h1 className={style.mainTitle}>Thoughts and words</h1>

        <div className={style.headerMain}>
          <figure className={style.imageBox}>
            <img src={pic} alt="" />
          </figure>

          <div className={style.blogDetail}>
            <div className={style.blogDetailHeader}>
              <h1>Category</h1>
              <time>November 22, 2021</time>
            </div>
            <p className={style.blogDetailText}>
              Pitch termsheet backing validation focus release.
            </p>

            <div className={style.blogAvi}>
              <img src={aviPic} alt="" className={style.avi} />
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogHeader;
