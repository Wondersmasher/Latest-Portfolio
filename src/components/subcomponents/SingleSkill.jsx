import React from "react";

const SingleSkill = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-2 px-8 py-4  xl:w-[22%] w-[45%] md:w-[30%]">
      {children}
      <p className="font-bold text-2xl font-sacramento">{title}</p>
    </div>
  );
};

export default SingleSkill;
