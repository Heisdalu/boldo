import Staff from "./Staff";
import style from "./Team.module.css";

const Team = () => {
  return (
    <div className={style.teamWraper}>
      <section className={style.teamBox}>
        <div className={style.header}>
          <span className={style.subTitle}>Our Team</span>
          <h1 className={style.title}>The Leadership team</h1>
          <p className={style.text}>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        
        <Staff />
      </section>
    </div>
  );
};

export default Team;
