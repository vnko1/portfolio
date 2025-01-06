import React from "react";
import Link from "next/link";

import { IconsEnum, ProjectType } from "@/types";
import { defaultImageDescription } from "@/utils";
import { CustomImage, BaseIcon } from "@/components";

interface ProjectCardProps extends ProjectType {
  classNames?: string;
  reverse: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  classNames,
  reverse,
  banner,
  bannerDescription,
  title,
  description,
  techStacks,
  liveLink,
  codeLink,
}) => {
  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden shadow-md lg:shadow-lg ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${classNames}`}>
      <div
        className={`flex justify-center items-center flex-1 p-md border-b border-gl-100 dark:border-gd-100 bg-gl-50 dark:bg-gd-50 lg:p-4-xl lg:border-b-0 ${
          reverse ? "border-l" : "border-r"
        }`}>
        <CustomImage
          src={banner?.url ?? "#"}
          alt={bannerDescription || defaultImageDescription}
          className='rounded-xl h-auto w-auto lg:max-h-[384px] object-contain lg:object-cover'
        />
      </div>
      <div className='flex-1 p-md bg-gl-100 dark:bg-gd-100 lg:p-4-xl flex flex-col gap-2-md'>
        <h4 className='subtitle font-semibold text-gl-900 dark:text-gd-900'>
          {title}
        </h4>
        <p className='body2'>{description}</p>
        <ul className='flex flex-wrap gap-0-md'>
          {techStacks.map(({ title }, index) => (
            <li key={index} className='tag'>
              {title}
            </li>
          ))}
        </ul>
        <div className='flex gap-1-lg items-center'>
          <Link href={liveLink} className='button icon'>
            <BaseIcon icon={IconsEnum.Navigation} />
          </Link>
          {codeLink && (
            <Link href={codeLink} className='button icon'>
              <BaseIcon icon={IconsEnum.Github} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
