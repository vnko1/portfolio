import React, { FC } from "react";

type ProjectTitleProps = {
  title: string;
  description: string;
  liveLink: string;
};

const ProjectTitle: FC<ProjectTitleProps> = ({
  title,
  description,
  liveLink,
}) => {
  return (
    <div className="project-cs-hero__content">
      <h1 className="heading-primary">{title}</h1>
      <div className="project-cs-hero__info">
        <p className="text-primary">{description}</p>
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
