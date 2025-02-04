import React from "react";
import Markdown from "react-markdown";

import { ExperienceType } from "@/types";
import { defaultImageDescription } from "@/utils";
import { CustomImage } from "@/components";

interface ExperienceCardProps extends ExperienceType {
  classNames?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  classNames,
  description,
  title,
  period,
  iconDark,
  iconLight,
  iconDescription,
}) => {
  return (
    <div
      className={`p-md rounded-xl bg-gl-0 dark:bg-gd-100 shadow-md dark:shadow-xl flex flex-col gap-2-lg lg:flex-row lg:justify-between lg:items-start lg:max-w-[74%] ${classNames}`}>
      {iconLight && (
        <CustomImage
          src={iconLight.url}
          alt={iconDescription || defaultImageDescription}
          className='w-full max-w-[40%] lg:max-w-[12.5%] dark:hidden'
        />
      )}
      {iconDark && (
        <CustomImage
          src={iconDark.url}
          alt={iconDescription || defaultImageDescription}
          className='w-full max-w-[40%] lg:max-w-[12.5%] hidden dark:block'
        />
      )}
      <p className='w-[40%] body2 text-gl-799 dark:text-gd-700 lg:order-1'>
        {period}
      </p>
      <div className='flex flex-col gap-1-lg'>
        <h4 className='subtitle font-semibold text-gl-900 dark:text-gd-900'>
          {title}
        </h4>
        <Markdown
          components={{
            ul: (props) => (
              <ul className='flex flex-col gap-1 list-disc pl-1-lg'>
                {props.children}
              </ul>
            ),
            li: (props) => (
              <li className='body2 text-gl-600 dark:text-gd-600'>
                {props.children}
              </li>
            ),
          }}>
          {description}
        </Markdown>
      </div>
    </div>
  );
};

export default ExperienceCard;
