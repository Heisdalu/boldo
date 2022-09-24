import style from "./DetailList.module.css";

import { Tick } from "../../../assets/Svg";

const DetailList = (props) => {
  return (
    <li className={style.mainList}>
      <span className={style.svg}>
        <Tick />
      </span>
      <span className={style.mainInfo}>{props.text}</span>
    </li>
  );
};

export default DetailList;
