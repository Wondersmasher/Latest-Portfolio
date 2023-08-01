import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-black min-h-[100vh] font-firaCode text-white w-full">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
