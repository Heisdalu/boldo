import Detail from "./Detail";
import Feature from "./Feature";
import style from "./Service.module.css";

const Service = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.serviceContainer}>
        <div className={style.service}>
          <header>
            <h1 className={style.title}>Our Services</h1>
          </header>
          <p className={style.content}>
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>

        <Feature />
        <Detail />
      </div>
    </div>
  );
};

export default Service;
