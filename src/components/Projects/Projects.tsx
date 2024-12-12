import { ProjectType } from "@/types/project.types";
import Image from "next/image";
import React from "react";

interface ProjectsProps {
  projects: Array<ProjectType>;
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="projects-link"
            >
              <Image
                src={project.banner.url}
                className="zoom"
                alt="thumbnail"
                sizes="100%"
                width={0}
                height={0}
              />
            </a>
            <a
              href={project.codeLink || project.liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
            {project.role && <p>Role: {project.role}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
