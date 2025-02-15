import React from "react";
import Image from "next/image";

import { IconsEnum, ReviewCardType } from "@/types";
import { Icon } from "@/components";

interface Props extends ReviewCardType {
  classNames?: string;
}

const defaultAvatar = "/user.svg";
const ReviewCard: React.FC<Props> = ({
  classNames,
  text,
  full_name,
  location,
  avatar,
}) => {
  return (
    <div
      className={`py-3-xs px-4-xs border border-light-grey-100 dark:border-dark-grey-100 ${classNames}`}
    >
      <p className="max-w-[90%] mb-2-md body1 leading-26 italic">{text}</p>
      <div className="flex gap-1-sm items-center">
        <div className="relative self-start flex-centering w-full h-4-xl max-w-4-xl rounded-[50%] overflow-hidden bg-light-grey-200 dark:bg-dark-grey-200">
          <Image
            src={avatar?.url || defaultAvatar}
            alt={full_name}
            fill
            sizes="100%"
          />
        </div>
        <div>
          <p className="font-bold leading-24 text-light-black-200 dark:text-dark-black-200">
            {full_name}
          </p>
          {location && (
            <p className="body1 leading-28 font-normal">{location}</p>
          )}
        </div>
        <Icon
          size={24}
          icon={IconsEnum.Quotes}
          className="ml-auto text-light-accent-100 dark:text-dark-accent-100 "
        />
      </div>
    </div>
  );
};

export default ReviewCard;
