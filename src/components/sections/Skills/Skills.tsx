import React from "react";
import { PortfolioType } from "@/types";
import { Skill, Wrapper } from "@/components";

interface SkillsProps
  extends Pick<PortfolioType, "skillsSection" | "skills"> {
  classNames?: string;
}

const Skills: React.FC<SkillsProps> = ({ skillsSection, skills }) => {
  if (!(skillsSection && skills) || !skills.length) return null;
  return (
    <Wrapper containerClassNames='section-container'>
      <div className='section-content'>
        <h4 className='tag mx-auto'>{skillsSection.title}</h4>
        <p className='subtitle text-center'>
          {skillsSection.description}
        </p>
      </div>
      {
        <ul className='flex items-center justify-between flex-wrap'>
          {skills.map((skill) => (
            <li key={skill.documentId}>
              <Skill {...skill} />
            </li>
          ))}
        </ul>
      }
    </Wrapper>
  );
};

export default Skills;
