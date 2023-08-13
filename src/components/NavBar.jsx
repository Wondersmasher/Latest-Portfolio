import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
const NavBar = ({ about, home, skills, projects, contact }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const scroll = (theRef) => {
    theRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    closeSideBar();
  };
  const openSideBar = () => setShowSideBar(true);

  const closeSideBar = () => setShowSideBar(false);
  // Animation
  const item = {
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        // delay: 0.5,
      },
    },
  };
  return (
    <nav className="flex justify-between items-center px-6 py-3 md:py-6 md:px-12 lg:px-32 sticky top-0 z-50 ">
      <div className="flex justify-center items-center gap-2 ">
        <p className=" font-bold text-lg md:text-xl lg:text-2xl">
          {"<Ezekiel/>"}
        </p>
        {/* <audio src="/audio/leva-eternity.mp3" loop autoPlay></audio> */}
      </div>

      <div className="lg:hidden visible " onClick={openSideBar}>
        <RxHamburgerMenu size={30} />
      </div>
      <ul className="md:flex justify-center items-center gap-4 hidden md:visible ">
        <li className="cursor-pointer " onClick={() => scroll(home)}>
          <span className="text-primary">#</span>home
        </li>
        <li className="cursor-pointer " onClick={() => scroll(about)}>
          <span className="text-primary">#</span>
          about
        </li>
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
      <AnimatePresence>
        {showSideBar && (
          <motion.ul
            variants={item}
            initial={{ x: 50, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit="exit"
            className={`h-screen w-screen absolute top-0 left-0 flex flex-col gap-8 p-8 visible lg:hidden  bg-black items-center justify-start`}
          >
            <div className="self-end mt-2" onClick={closeSideBar}>
              <AiOutlineClose size={30} />
            </div>
            <div className=" flex flex-col gap-8 justify-center items-center flex-1">
              <li
                className="cursor-pointer text-3xl"
                onClick={() => scroll(home)}
              >
                <span className="text-primary  ">#</span>home
              </li>
              <li
                className="cursor-pointer text-3xl"
                onClick={() => scroll(about)}
              >
                <span className="text-primary ">#</span>
                about
              </li>
              <li
                className="cursor-pointer text-3xl"
                onClick={() => scroll(skills)}
              >
                <span className="text-primary ">#</span>skills
              </li>
              <li
                className="cursor-pointer text-3xl"
                onClick={() => scroll(projects)}
              >
                <span className="text-primary ">#</span>projects
              </li>
              <li
                className="cursor-pointer text-3xl"
                onClick={() => scroll(contact)}
              >
                <span className="text-primary ">#</span>contact
              </li>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
