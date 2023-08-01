import React from "react";
import Hr from "./Hr";
const SectionContainer = ({ children, title, pt = "pt-16" }) => {
  return (
    <section
      className={`px-6  ${pt}  lg:px-12 xl:px-32  flex flex-col gap-2 justify-center `}
    >
      <div className="flex gap-2 justify-center items-center mb-6 lg:mb-12">
        <p className=" font-bold text-2xl md:text-3xl lg:text-5xl text-gray font-sacramento ">
          <span className="text-primary">#</span>
          {title}
        </p>
        <Hr />
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
