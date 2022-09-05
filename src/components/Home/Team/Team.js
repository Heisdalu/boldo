import style from "./Team.module.css";
import { Arrow } from "../../../assets/Svg";
import TeamSlider from "./TeamSlider";

const Team = () => {
 
  return (
    <section className={style.sliderContainer}>
      <div className={style.sliderHeader}>
        <h1 className={style.sliderTitle}>
          An enterprise template to ramp up your company website
        </h1>
        <div className={style.sliderNavigation} aria-hidden="true">
          <button className={style.leftBtn}>
            <Arrow />
          </button>
          <button className={style.rightBtn}>
            <Arrow />
          </button>
        </div>
      </div>

      <TeamSlider/>
    </section>
  );
};

export default Team;
