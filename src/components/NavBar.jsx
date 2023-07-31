import React, { useEffect, useRef } from "react";

const NavBar = () => {
  return (
    <nav className=" py-4 px-12 flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <p>EzekielDev</p>
        <p className="px-4 py-2 bg-accent2  animate-bounce-slow rounded-full cursor-pointer duration-500">
          Audio
        </p>
      </div>
      <ul className="flex gap-4 items-center justify-center">
        <li className="hover:text-accent2 transition-colors duration-500 active:text-accent2">
          Home
        </li>
        <li>About</li> <li>Skills</li> <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="px-12 py-3 border-text border-2">Resume</div>
    </nav>
  );
};

export default NavBar;
