// import style from './TeamSlide.module.css';
import Slider from "infinite-react-carousel";
import { useState } from "react";
import Slide from "./Slide";
import { data } from "../../../data";

const checkWidth = () => {
  // mobile screen
  if (window.matchMedia("(max-width: 767px)").matches) return 1;
  // desktop screen
  if (window.matchMedia("(min-width: 1200px)").matches) return 3;
  //laptop screen
  if (window.matchMedia("(min-width:768px) and (max-width:1999px)").matches)
    return 2;
};

const TeamSlider = (props) => {
  const [num, setNum] = useState(checkWidth());
  window.addEventListener("resize", () => {
    // when windows resizes, check for our cuurent breakpoints
    const newNum = checkWidth();
    setNum(newNum);
  });

  console.log(num);

  const settings = {
    autoplay: true,
    slidesToShow: num,
  };

  console.log(data);

  const component = data.map((el, i) => (
    <Slide key={i} text={el.text} title={el.name} job={el.job} pic={el.pic} />
  ));
  return (
    <div>
      <Slider {...settings}>
        {component}
      </Slider>
    </div>
  );
};

export default TeamSlider;