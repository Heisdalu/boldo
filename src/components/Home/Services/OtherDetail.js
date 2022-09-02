import style from "./OtherDetail.module.css";
import womanPicWebp from "../../../assets/smiling-woman.webp";
import womanPicPng from "../../../assets/smiling-woman.png";
import { Sun, Eye, Star } from "../../../assets/Svg";

const OtherDetail = () => {
  return (
    <div className={style.otherDetailContainer}>
      <h1 className={style.header}>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </h1>
      <div className={style.listBox}>
        <div className={style.list}>
          <span className={style.svg}>
            <Star />
          </span>
          <span className={style.text}>
            We connect our customers with the best.
          </span>
        </div>

        <div className={style.list}>
          <span className={style.svg}>
            <Eye />
          </span>
          <span className={style.text}>
            Advisor success customer launch party.
          </span>
        </div>

        <div className={style.list}>
          <span className={style.svg}>
            <Sun />
          </span>

          <span className={style.text}>Business-to-consumer long tail.</span>
        </div>
      </div>

      <figure className={style.image}>
        <picture>
          <source srcSet={womanPicWebp} type="image/webp" />
          <img
            src={womanPicPng}
            alt="A woman smiling with his phone on the ear"
          />
        </picture>
      </figure>
    </div>
  );
};

export default OtherDetail;
