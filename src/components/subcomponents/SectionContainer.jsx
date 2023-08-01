import React from "react";
import Hr from "./Hr";
const SectionContainer = ({ children, title }) => {
  return (
    <section className="px-6 pt-16  lg:px-12 xl:px-32  flex flex-col gap-2 justify-center">
      <div className="flex gap-2 justify-center items-center mb-12">
        <p className=" font-bold text-5xl text-gray ">
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
