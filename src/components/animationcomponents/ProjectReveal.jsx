import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const ProjectReveal = ({ children, time = 2 }) => {
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
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        // THIS
        initial={!isInView ? "hidden" : ""}
        animate={isInView ? "visible" : ""}
        transition={{ duration: time, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectReveal;
