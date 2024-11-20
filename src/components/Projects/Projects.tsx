import React, { FC } from "react";

import { SectionType } from "@/types/section.types";
import { ProjectType } from "@/types/project.types";

import { Project } from "./components";

interface ProjectsProps extends SectionType {
  projects: Array<ProjectType>;
}

const Projects: FC<ProjectsProps> = ({ title, subTitle, projects }) => {
  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">{title}</span>
        <span className="heading-sec__sub">{subTitle}</span>
      </h2>
      <ul className="projects__content">
        {projects.map((project) => (
          <li key={project.id}>
            <Project
              title={project.title}
              description={project.preview}
              link={`projects/${project.documentId}`}
              image={project.banner.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
