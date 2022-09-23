import React, { useEffect } from "react";
import Splitting from "splitting";

const useSplitting = (refValue) => {
  useEffect(() => {
    const [element] = Splitting({ target: refValue.current, by: "lines" });
    //    const [done] = Splitting({ target: see.current, by: "lines" });
    //    console.log(done);

    console.log(element);
    element.words.map(
      (el) => (el.innerHTML = `<span class=''>${el.innerText}</span>`)
    );
  }, [refValue]);
};

export default useSplitting;
