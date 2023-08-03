import React from "react";
import Hr from "./Hr";
import Animate from "../animationcomponents/Animate";
import Reveal from "../animationcomponents/Reaveal";
const SectionContainer = ({ children, title, pt = "pt-16", theRef }) => {
  return (
    <section
      ref={theRef}
      className={`px-6 md:pt-16  ${pt}  lg:px-12 xl:px-32  flex flex-col gap-2 justify-center min-h-screen `}
    >
      <Reveal time={1.5}>
        <div className="flex gap-2 justify-center items-center mb-6 lg:mb-12">
          <p className=" font-bold text-2xl md:text-3xl lg:text-5xl text-gray font-sacramento ">
            <span className="text-primary">#</span>
            {title}
          </p>
          <Hr />
        </div>
      </Reveal>
      {children}
    </section>
  );
};

export default SectionContainer;
