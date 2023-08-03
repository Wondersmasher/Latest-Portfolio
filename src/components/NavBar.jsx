import React from "react";

const NavBar = ({ about, home, skills, projects, contact }) => {
  const scroll = (theRef) => {
    theRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <nav className="flex justify-between items-center px-6 py-3 md:py-6 md:px-12 lg:px-32 sticky top-0 z-50">
      <div className="flex justify-center items-center gap-2">
        <p className=" font-bold text-lg md:text-xl lg:text-2xl">
          {"<Ezekiel/>"}
        </p>
        <audio src="/audio/leva-eternity.mp3" loop autoPlay></audio>
      </div>
      <ul className="md:flex justify-center items-center gap-4 hidden md:visible ">
        <li className="cursor-pointer " onClick={() => scroll(home)}>
          <span className="text-primary">#</span>home
        </li>
        <li className="cursor-pointer " onClick={() => scroll(about)}>
          <span className="text-primary">#</span>
          about
        </li>{" "}
        <li className="cursor-pointer " onClick={() => scroll(skills)}>
          <span className="text-primary">#</span>skills
        </li>
        <li className="cursor-pointer " onClick={() => scroll(projects)}>
          <span className="text-primary">#</span>projects
        </li>
        <li className="cursor-pointer " onClick={() => scroll(contact)}>
          <span className="text-primary">#</span>contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
