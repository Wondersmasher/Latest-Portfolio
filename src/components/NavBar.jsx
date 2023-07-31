import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <div className="flex justify-center items-center gap-2">
        <p className=" font-bold text-2xl">{"<Ezekiel/>"}</p>
      </div>
      <ul className="flex justify-center items-center gap-4">
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
