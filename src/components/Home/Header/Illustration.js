import illustration_pic from "../../../assets/header-illustration.webp";
import illustration_png from "../../../assets/header-illustration.png";

import style from './Illustration.module.css'

const Illustration = () => {
  return (
    <div className={style.illustration}>
      <figure>
        <picture>
          <source srcSet={illustration_pic} type='image/webp'/>
          <img src={illustration_png} alt=''/>
        </picture>        
      </figure>
    </div>
  );
};

export default Illustration;
