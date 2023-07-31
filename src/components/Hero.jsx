import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-8 justify-center items-center py-64 bg-[url('/Profile-Picture.png')] bg-no-repeat bg-contain bg-blend-overlay bg-black">
      <p className="font-bold text-white text-4xl text-center ">
        Hi there, I am{" "}
        <span className="text-primary">
          Ezekiel Akinniyi <br />
        </span>{" "}
      </p>
      <p className="font-bold text-white text-3xl text-center ">
        A <span className="text-primary">FrontEnd Developer</span>
      </p>
      <p className="text-gray">
        I craft responsive websites where technologies meets creativity
      </p>
      <div className="flex justify-center items-center gap-4">
        <div className="animate-bounce-slow hover:animate-none">
          <div className="text-white border-2 px-4 py-2 border-white cursor-pointer animate-pulse-slow hover:animate-none">
            Resume
          </div>
        </div>
        <div className="text-white border-2 px-4 py-2 border-white cursor-pointer animate-pulse-slow hover:animate-none">
          Contact me!!
        </div>
      </div>
    </div>
  );
};

export default Hero;
