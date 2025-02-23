import React from "react";

import { ProjectCardType } from "@/types";
import { ProjectCard } from "@/components";

interface Props {
  projects: ProjectCardType[];
  classNames?: string;
}

const Projects: React.FC<Props> = ({ projects, classNames }) => (
  <ul className={`grid-container ${classNames}`}>
    {projects.map((project) => (
      <li className="flex" key={project.id}>
        <ProjectCard classNames="grow" {...project} />
      </li>
    ))}
  </ul>
);

export default Projects;
