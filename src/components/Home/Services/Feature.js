/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Feature.module.css";
import pic1 from "../../../assets/feature1.svg";
import { Arrow } from "../../../assets/Svg";
import pic2 from '../../../assets/feature2.svg'
import pic3 from '../../../assets/feature3.svg'

const data = [
  {
    title: "Cool feature title",
    text: "  Learning curve network effects return on investment.",
    pic: pic1
  },
  {
    title: "Even cooler feature",
    text: "  Learning curve network effects return on investment.",
    pic: pic2
  },
  {
    title: "Cool feature title",
    text: "  Learning curve network effects return on investment.",
    pic: pic3
  },
];

const Feature = () => {
  return (
    <div className={style.feature}>
      {data.map((el, i) => (
        <div className={style.featureCard} key={i}>
          <figure aria-hidden="true" className={style.figureImg}>
            <img src={el.pic} alt="" />
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
