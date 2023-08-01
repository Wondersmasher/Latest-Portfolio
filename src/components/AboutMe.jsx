import React from "react";
import SectionContainer from "./subcomponents/SectionContainer";

const AboutMe = () => {
  return (
    <SectionContainer title="aboutMe">
      <div className="flex gap-8 justify-center items-center flex-col md:flex-row ">
        <div className="flex flex-col flex-1  gap-4 md:w-[50%] w-[100%] text-justify">
          <p className="text-lg">
            Hello I'm <span className="text-primary">Ezekiel Akinniyi</span>
          </p>
          <p>
            A passionate Frontend Developer with a love for design and a knack
            for turning ideas into beautiful, user-friendly websites and web
            applications.
          </p>
          <p>
            My journey as a Frontend Developer has been a continuous learning
            adventure. I have honed my skills in HTML, CSS, and JavaScript,
            staying up-to-date with the latest frameworks and tools to ensure my
            work remains at the cutting edge of modern web development.
          </p>
          <p>
            I take great pride in writing clean, efficient, and scalable code,
            adhering to industry best practices and standards. But it's not just
            about lines of code for me. I believe in understanding the users'
            needs and incorporating their feedback into my designs.
          </p>

          <p>Let's collaborate and bring your visions to life!</p>
        </div>
        <div className="relative">
          <img
            src="/about.png"
            alt="about-me"
            className="opacity-60 border-2 border-r-primary border-l-primary2 border-t-primary3 border-b-primary4 border-dashed"
          />
          <div className="absolute top-[15%] right-48">
            <img src="/Dots.png" alt="dots" className="w-16 h-16" />
          </div>

          <div className="absolute top-[85%] right-8">
            <img src="/Dots.png" alt="dots" className="w-16 h-16" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
