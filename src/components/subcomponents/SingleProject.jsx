import React from "react";

const SingleProject = ({ tools, title, description }) => {
  return (
    <div className="text-gray single-project flex flex-col gap-0 border-[1px] w-[100%] md:w-[48%] xl:w-[25%]">
      <img src="/Rectangle.png" alt="project-1" className="w-full h-auto" />
      <p className="border-y-[1px] py-2 px-2 text-justify">{tools}</p>
      <p className="text-2xl py-2 text-white px-2">{title}</p>
      <p className="px-2 pb-3">{description}</p>
      <div className="flex">
        <div className="mx-1 mb-2 border-[1px] border-primary px-4 py-2  text-center">
          Live
        </div>
        <div className="mx-1 mb-2 border-[1px] border-white px-4 py-2  text-center">
          GitHub
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
