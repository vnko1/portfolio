import React from "react";
import { ProjectCard, Wrapper } from "@/components";
import { PortfolioType } from "@/types";

interface WorkProps
  extends Pick<PortfolioType, "projectsSection" | "projects"> {
  classNames?: string;
}
const Work: React.FC<WorkProps> = ({ projectsSection, projects }) => {
  if (!(projectsSection && projects)) return null;

  return (
    <Wrapper containerClassNames='section-container'>
      <div className='section-content'>
        <h4 className='tag mx-auto'>{projectsSection.title}</h4>
        <p className='subtitle text-center'>
          {projectsSection.description}
        </p>
      </div>
      <ul className='flex flex-col gap-2-md lg:gap-4-xl w-full'>
        {projects.map((item, index) => (
          <li key={item.documentId}>
            <ProjectCard
              {...item}
              reverse={index % 2 === 0}
              classNames='mx-auto'
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Work;
