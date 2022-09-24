import style from "./List.module.css";
import { ArrowDown } from "../../../assets/Svg";
import React, { useRef } from "react";

const List = () => {
  const dropDownRef = useRef();
  const svgRef = useRef();

  const func = () => {
    dropDownRef.current.classList.toggle(style.hiddenList);
    svgRef.current.classList.toggle(style.inverted);
  };

  return (
    <li className={style.list} onClick={func}>
      <div className={style.listItem}>
        <span>We connect our customers with the best?</span>
        <span className={style.arrowDown} ref={svgRef}>{<ArrowDown />}</span>
      </div>

      <div className={style.listDropDown} ref={dropDownRef}>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </div>
    </li>
  );
};

export default List;
