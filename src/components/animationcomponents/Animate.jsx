import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Reveal from "./Reaveal";
const Animate = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  // I dont know why but when i followed this approach the animation was only viewed once. I tried but to no avail isInView was working as expected but the control1 and control2 were not. Hence i tried to use ternary operator ?. Check THIS below
  // console.log(isInView);
  // const mainControls = useAnimation();
  // const slideControls = useAnimation();
  // useEffect(() => {
  //   console.log("ran again");
  //   mainControls.start("visible");
  //   slideControls.start("visible");
  // }, [isInView]);
  return (
    <div ref={ref} className="relative">
      <Reveal>
        {children}
        <motion.div
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          // THIS
          initial={!isInView ? "hidden" : ""}
          animate={isInView ? "visible" : ""}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-1 left-0 bottom-1 right-0 bg-primary z-26"
        ></motion.div>
      </Reveal>
    </div>
  );
};

export default Animate;
