import style from "./Stats.module.css";

const Stats = () => {
  return (
    <div className={style.statsWrapper}>
      <section className={style.statsMain}>
        <span className={style.subTitle}>Our numbers</span>
        <h1 className={style.title}>
          An enterprise template to ramp up your company website
        </h1>

        <div className={style.stats}>
          <div className={style.counter}>
            <span className={style.value}>120m</span>
            <span className={style.name}>Revenues</span>
          </div>

          <div className={style.counter}>
            <span className={style.value}>10.000</span>
            <span className={style.name}>Units</span>
          </div>

          <div className={style.counter}>
            <span className={style.value}>240</span>
            <span className={style.name}>Users</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
