import React from "react";
import Image from "next/image";

import { SkillType } from "@/types";

interface Props extends SkillType {
  classNames?: string;
}

const Skill: React.FC<Props> = ({
  classNames,
  progress,
  title,
  light_icon,
  dark_icon,
}) => {
  if (progress === 0) return null;
  let progressValue = progress ?? 1;
  if (progressValue > 1) progressValue = 1;
  const convertedValue = progressValue * 100;

  return (
    <div className={`flex items-center gap-3-xs ${classNames}`}>
      <div className="flex items-center gap-1-lg w-full">
        <div
          style={{ width: `${convertedValue}%` }}
          className="bg-primary-dark text-text-secondary px-2-md py-0-md rounded-lg flex items-center gap-0-xl"
        >
          {light_icon && (
            <Image
              src={light_icon.url}
              alt={title}
              className="w-5 h-5 dark:hidden"
              width={0}
              height={0}
            />
          )}
          {dark_icon && (
            <Image
              src={dark_icon.url}
              alt={title}
              className="w-5 h-5 hidden dark:block"
              width={0}
              height={0}
            />
          )}
          <span className="uppercase font-semibold leading-26">{title}</span>
        </div>
        <div className="flex-1 border-t border-black" />
      </div>
      {progress && (
        <p className="inline-block ml-auto text-text-primary text-xs font-bold leading-26 uppercase">
          {convertedValue}%
        </p>
      )}
    </div>
  );
};

export default Skill;
