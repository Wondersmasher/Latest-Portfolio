import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-6 md:gap-8 justify-center items-center py-20 lg:py-64 bg-[url('/Profile-Picture.png')] bg-no-repeat bg-contain bg-blend-overlay bg-black relative ">
      <div className="absolute top-[50%] left-2 opacity-50">
        <img src="/Dots.png" alt="dots" className="w-16 h-16" />
      </div>
      <div className="absolute top-[70%] right-[5%] opacity-60">
        <img src="/Dots.png" alt="dots" className="w-16 h-16" />
      </div>
      <div className="absolute top-[15%] right-16 animate-spin-slow">
        <img
          src="/Logo.png"
          alt="dots"
          className="w-32 h-32 animate-pulse-slow"
        />
      </div>
      <p className="font-bold text-white text-xl md:text-4xl text-center  ">
        Hi there, I am{" "}
        <span className="text-primary">
          Ezekiel Akinniyi <br />
        </span>{" "}
      </p>
      <p className="font-bold text-white text-lg md:text-3xl text-center ">
        A <span className="text-primary">FrontEnd Developer</span>
      </p>
      <p className="text-gray text-sm md:text-md text-center">
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
