import illustration_pic from "../../../assets/header-illustration.svg";
import style from './Illustration.module.css'

const Illustration = () => {
  return (
    <div className={style.illustration}>
      <figure>
        <img src={illustration_pic} alt="" />
      </figure>
    </div>
  );
};

export default Illustration;
