import React from "react";
import SingleProject from "./subcomponents/SingleProject";
import SectionContainer from "./subcomponents/SectionContainer";

const Projects = () => {
  return (
    <SectionContainer title="projects">
      <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center ">
        <SingleProject
          tools="React Node Express MongoDb Vite Tailwind"
          title="The Title"
          description="Discord anti-crash bot"
        />
        <SingleProject
          tools="React Node Express MongoDb Vite Tailwind"
          title="The Title"
          description="Discord anti-crash bot"
        />
        <SingleProject
          tools="React Node Express MongoDb Vite Tailwind"
          title="The Title"
          description="Discord anti-crash bot"
        />
        <SingleProject
          tools="React Node Express MongoDb Vite Tailwind"
          title="The Title"
          description="Discord anti-crash bot"
        />
      </div>
    </SectionContainer>
  );
};

export default Projects;
