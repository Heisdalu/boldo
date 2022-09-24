/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./FeatureSlide.module.css";
import { Arrow } from "../../../assets/Svg";
import { useContext } from "react";
import StoreContext from "../../../store/store-context";


const FeatureSlide = (props) => {
  const { update } = useContext(StoreContext);

  const loadElement = () => {
    update({ type: "ADD", value: 17 });
  };

  return (
    <div className={style.featureCard}>
      <figure aria-hidden="true" className={style.figureImg}>
        <img src={props.pic} alt="" onLoad={loadElement} />
      </figure>

      <div className={style.featureContent}>
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.text}>{props.text}</p>

        <a href="" className={style.link}>
          Explore page
          <span className={style.svg}>
            <Arrow />
          </span>
        </a>
      </div>
    </div>
  );
};

export default FeatureSlide;
