import style from "./Detail.module.css";
import pic1Webp from "../../../assets/smiling-man.webp";
import pic1Png from "../../../assets/smiling-man.png";
import OtherDetail from "./OtherDetail";
import { Tick } from "../../../assets/Svg";

const Detail = () => {
  return (
    <section className={style.detailContainer}>
      <div className={style.mainDetail}>
        <figure>
          <picture>
            <source srcSet={pic1Webp} type="image/webp" />
            <img src={pic1Png} alt="A man smiling with his phone on the ear" />
          </picture>
        </figure>

        <div className={style.mainContent}>
          <h1 className={style.mainTitle}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          <ul className={style.mainText}>
            <li className={style.mainList}>
              <span className={style.svg}>
                <Tick />
              </span>
              <span className={style.mainInfo}>
                We connect of customers with the best.
              </span>
            </li>

            <li className={style.mainList}>
              <span className={style.svg}>
                <Tick />
              </span>

              <span className={style.mainInfo}>
                Advisor success customer launch party.
              </span>
            </li>

            <li className={style.mainList}>
              <span className={style.svg}>
                <Tick />
              </span>
              <span className={style.mainInfo}>
                Business-to-consumer long tail.
              </span>
            </li>

            <button className={style.button}>Start Now</button>
          </ul>
        </div>
      </div>

      <OtherDetail />
    </section>
  );
};

export default Detail;
