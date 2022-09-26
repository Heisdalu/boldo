import {useRef } from "react";
import style from "./Service.module.css";
import useSplitting from "../../../hooks/useSplitting";
import Detail from "./Detail";
import Feature from "./Feature";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import useAnimate from "../../../hooks/useAnimate";


const Service = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  // useSplitting(titleRef);
  // useSplitting(contentRef);

  // const titleObserve = useIntersectionObserver(titleRef);
  // const contentObserve = useIntersectionObserver(contentRef);
  // // console.log(titleObserve);
  useAnimate(titleRef, style.textAnimate);
  useAnimate(contentRef, style.textAnimate);


  return (
    <div className={style.wrapper}>
      <div className={style.serviceContainer}>
        <div className={style.service}>
          <header>
            <h1
              className={`${style.title}`}
              ref={titleRef}
            >
              Our Services
            </h1>
          </header>
          <p className={`${style.content}`} ref={contentRef}>
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
