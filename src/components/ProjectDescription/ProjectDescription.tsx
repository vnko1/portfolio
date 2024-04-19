import Image from "next/image";
import React, { FC } from "react";

type ProjectDescriptionProps = {
  overview: string;
  mainDescription: string;
  liveLink: string;
  codeLink: string;
  tools: string[];
  image: string;
};

const ProjectDescription: FC<ProjectDescriptionProps> = ({
  tools,
  image,
  overview,
  mainDescription,
  liveLink,
  codeLink,
}) => {
  return (
    <div className="main-container">
      <div className="project-details__content">
        <div className="project-details__showcase-img-cont">
          <Image
            src={image}
            alt="Project Image"
            className="project-details__showcase-img"
            width={936}
            height={702}
          />
        </div>
        <div className="project-details__content-main">
          <div className="project-details__desc">
            <h3 className="project-details__content-title">Project Overview</h3>
            <p className="project-details__desc-para">{overview}</p>
            <p className="project-details__desc-para">{mainDescription}</p>
          </div>
          <div className="project-details__tools-used">
            <h3 className="project-details__content-title">Tools Used</h3>
            <ul className="skills">
              {tools.map((el, i) => (
                <li key={i}>
                  <div className="skills__skill">{el}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="project-details__links">
            <h3 className="project-details__content-title">See Live</h3>
            <a
              href={liveLink}
              className="btn btn--med btn--theme project-details__links-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Link
            </a>
            <a
              href={codeLink}
              className="btn btn--med btn--theme-inv project-details__links-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Code Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
