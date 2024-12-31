import React from "react";
import { SkillType } from "@/types";
import { CustomImage } from "@/components";
import { defaultImageDescription } from "@/utils";

interface SkillProps extends SkillType {
  classNames?: string;
}

const Skill: React.FC<SkillProps> = ({
  classNames,
  title,
  iconDark,
  iconLight,
  iconDescription,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-0-md ${classNames}`}>
      <CustomImage
        className='dark:hidden w-[64px] h-[64px'
        src={iconLight.url}
        alt={iconDescription || defaultImageDescription}
      />
      <CustomImage
        className='hidden dark:block w-[64px] h-[64px]'
        src={iconDark.url}
        alt={iconDescription || defaultImageDescription}
      />
      <p className='body1 text-gl-600 dark:text-gd-600'>{title}</p>
    </div>
  );
};

export default Skill;
