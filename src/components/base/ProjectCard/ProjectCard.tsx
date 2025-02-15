import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IconsEnum, ProjectCardType } from "@/types";
import { Icon } from "@/components";

import styles from "./ProjectCard.module.css";

interface Props extends ProjectCardType {
  classNames?: string;
}

const ProjectCard: React.FC<Props> = ({
  classNames,
  title,
  tech_stack,
  banner,
  description,
  code_link,
  live_link,
}) => {
  return (
    <div className={`${styles.card} ${classNames || ""}`}>
      <Image src={banner.url} alt={title} fill sizes="33vw" />
      <div
        className={`${styles.content} ${
          description ? "justify-between" : "justify-end"
        }`}
      >
        {description && (
          <p className="body2 leading-26 font-medium w-full overflow-y-auto">
            {description}
          </p>
        )}
        <div className="w-full flex items-center justify-between gap-1-xs">
          <div className="flex flex-col flex-1 ">
            <h4 className="font-normal text-light-secondary dark:text-dark-secondary">
              {title}
            </h4>
            <p className="font-bold text-sm leading-30 text-light-light dark:text-dark-light">
              {tech_stack}
            </p>
          </div>
          <div className="flex gap-0-xl">
            <Link
              className={styles.link}
              href={live_link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon icon={IconsEnum.RightArrow} size={24} />
            </Link>
            {code_link && (
              <Link
                className={styles.link}
                href={code_link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon icon={IconsEnum.Github} size={24} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
