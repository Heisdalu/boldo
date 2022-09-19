import style from "./Team.module.css";
import TeamSlider from "./TeamSlider";

const Team = () => {

  return (
    <section className={style.sliderContainer}>
      <TeamSlider />
    </section>
  );
};

export default Team;
