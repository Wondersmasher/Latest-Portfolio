import React from "react";
import SectionContainer from "./subcomponents/SectionContainer";
import Texts from "./subcomponents/Texts";
import { FaReact } from "react-icons/fa";
import SingleSkill from "./subcomponents/SingleSkill";
const Skills = () => {
  return (
    <SectionContainer title="skills">
      <div className="flex flex-col  justify-center items-center  gap-5">
        {/* <Texts size="lg">
          These are some of the tools i have use in my front end development
          journey
        </Texts> */}
        <p className="text-center">
          These are some of the tools i have use in my front end development
          journey
        </p>
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
    </SectionContainer>
  );
};

export default Skills;
