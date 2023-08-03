import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  return (
    <div className="bg-black min-h-[100vh] font-firaCode text-white w-full">
      <NavBar
        about={about}
        skills={skills}
        projects={projects}
        contact={contact}
        home={home}
      />
      <Hero home={home} />
      <AboutMe about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <ContactMe contact={contact} />
    </div>
  );
};

export default App;
