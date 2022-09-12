/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Feature.module.css";
import pic from "../../../assets/feature1.svg";
import { Arrow } from "../../../assets/Svg";

const data = [
  {
    title: "Cool feature title",
    text: "  Learning curve network effects return on investment.",
  },
  {
    title: "Even cooler feature",
    text: "  Learning curve network effects return on investment.",
  },
  {
    title: "Cool feature title",
    text: "  Learning curve network effects return on investment.",
  },
];

const Feature = () => {
  return (
    <div className={style.feature}>
      {data.map((el, i) => (
        <div className={style.featureCard} key={i}>
          <figure aria-hidden="true" className={style.figureImg}>
            <img src={pic} alt="" />
          </figure>

          <div className={style.featureContent}>
            <h1 className={style.title}>{el.title}</h1>
            <p className={style.text}>{el.text}</p>

            <a href="" className={style.link}>
              Explore page
              <span className={style.svg}>
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
