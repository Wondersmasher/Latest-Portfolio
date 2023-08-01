import React, { useState } from "react";

const NavBar = () => {
  const [play, setPlay] = useState(true);
  return (
    <nav className="flex justify-between items-center px-6 py-3 md:py-6 md:px-12 lg:px-32">
      <div className="flex justify-center items-center gap-2">
        <p className=" font-bold text-lg md:text-xl lg:text-2xl">
          {"<Ezekiel/>"}
        </p>
        <audio src="/audio/leva-eternity.mp3" loop></audio>
      </div>
      <ul className="md:flex justify-center items-center gap-4 hidden md:visible">
        <li className="cursor-pointer ">
          <span className="text-primary">#</span>home
        </li>
        <li className="cursor-pointer ">
          <span className="text-primary">#</span>about
        </li>
        <li className="cursor-pointer ">
          <span className="text-primary">#</span>projects
        </li>
        <li className="cursor-pointer ">
          <span className="text-primary">#</span>contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
