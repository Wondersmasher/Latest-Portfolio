import React from "react";
import SingleProject from "./subcomponents/SingleProject";
import SectionContainer from "./subcomponents/SectionContainer";
import ProjectReveal from "./animationcomponents/ProjectReveal";

const Projects = ({ projects }) => {
  return (
    <SectionContainer title="projects" theRef={projects}>
      <ProjectReveal>
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
      </ProjectReveal>
    </SectionContainer>
  );
};

export default Projects;
