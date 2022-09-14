import Gallery from "./Gallery";
import style from "./Story.module.css";

const Story = () => {
  return (
    <div className={style.storyWrapper}>
      <section className={style.storyContainer}>
        <Gallery />
        <div className={style.storyMain}>
          <span className={style.subTitle}>Our Story</span>
          <h1 className={style.title}>Handshake infographic mass market crowdfunding iteration.</h1>
          <p className={style.text}>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Story;
