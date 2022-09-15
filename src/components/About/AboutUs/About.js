import style from "./About.module.css";

const About = () => {
  return (
    <div class={style.aboutWrapper}>
      <div className={style.aboutContainer}>
        <div className={style.aboutHeader}>
          <span class={style.subTitle}>Our Blog</span>
          <h1 className={style.title}>
            Value proposition accelerator product management venture
          </h1>
        </div>

        <section className={style.AboutMain}>
          <div className={style.aboutContent}>
            <h1 className={style.aboutTitle}>
              We are <span className={style.unique}>committed</span>
            </h1>
            <p className={style.content}>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>

          <div className={style.aboutContent}>
            <h1 className={style.aboutTitle}>
              We are <span className={style.unique}>responsible</span>
            </h1>
            <p className={style.content}>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>

          <div className={style.aboutContent}>
            <h1 className={style.aboutTitle}>
              We aim for <span className={style.unique}>progress</span>
            </h1>
            <p className={style.content}>
              Bootstrapping rockstar first mover advantage business model canvas
              alpha deployment launch party beta facebook metrics gamification
              growth hacking customer focus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
