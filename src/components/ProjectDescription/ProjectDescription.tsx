import Image from "next/image";
import React, { FC } from "react";
import Markdown from "react-markdown";

import { ProjectType } from "@/types/project.types";

interface ProjectDescriptionProps
  extends Pick<
    ProjectType,
    "tools" | "banner" | "overview" | "liveLink" | "codeLink"
  > {}

const ProjectDescription: FC<ProjectDescriptionProps> = ({
  tools,
  banner,
  overview,
  liveLink,
  codeLink,
}) => {
  return (
    <div className="main-container">
      <div className="project-details__content">
        <div className="project-details__showcase-img-cont">
          <Image
            src={banner.url}
            alt="Project Image"
            className="project-details__showcase-img"
            width={936}
            height={702}
          />
        </div>
        <div className="project-details__content-main">
          <div className="project-details__desc">
            <h3 className="project-details__content-title">Project Overview</h3>
            <Markdown className="project-details__desc-para">
              {overview}
            </Markdown>
          </div>
          <div className="project-details__tools-used">
            <h3 className="project-details__content-title">Tools Used</h3>
            <ul className="skills">
              {tools.map((tool) => (
                <li key={tool.id}>
                  <div className="skills__skill">{tool.item}</div>
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
            {codeLink && (
              <a
                href={codeLink}
                className="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
