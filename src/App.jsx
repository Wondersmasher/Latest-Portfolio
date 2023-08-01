import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="bg-black min-h-[100vh] font-firaCode text-white w-full">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
