import React from "react";
import SectionContainer from "./subcomponents/SectionContainer";
import Texts from "./subcomponents/Texts";
import { FaReact } from "react-icons/fa";
import SingleSkill from "./subcomponents/SingleSkill";
import ProjectReveal from "./animationcomponents/ProjectReveal";
import Animate from "./animationcomponents/Animate";
const Skills = ({ skills }) => {
  return (
    <SectionContainer title="skills" theRef={skills}>
      <ProjectReveal>
        <div className="flex flex-col  justify-center items-center  gap-5">
          <Animate>
            <p className="text-center">
              These are some of the tools i have use in my front end development
              journey
            </p>
          </Animate>
          <div className="w-[100%]  h-[300px  flex flex-wrap gap-4 justify-evenly">
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
            <SingleSkill title="React">
              <FaReact size={50} />
            </SingleSkill>{" "}
          </div>
        </div>
      </ProjectReveal>
    </SectionContainer>
  );
};

export default Skills;
