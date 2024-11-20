import React, { FC } from "react";
import { ProjectType } from "@/types/project.types";

interface ProjectTitleProps
  extends Pick<ProjectType, "title" | "subTitle" | "liveLink"> {}

const ProjectTitle: FC<ProjectTitleProps> = ({ title, subTitle, liveLink }) => {
  return (
    <div className="project-cs-hero__content">
      <h1 className="heading-primary">{title}</h1>
      <div className="project-cs-hero__info">
        <p className="text-primary">{subTitle}</p>
      </div>
      <div className="project-cs-hero__cta">
        <a href={liveLink} className="btn btn--bg" target="_blank">
          Live Link
        </a>
      </div>
    </div>
  );
};

export default ProjectTitle;
