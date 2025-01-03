import React from "react";

import { PortfolioType } from "@/types";
import { CustomImage, LocationIcon, Wrapper } from "@/components";
import { defaultImageDescription } from "@/utils";
import Link from "next/link";

interface HeroProps
  extends Pick<
    PortfolioType,
    | "heroSection"
    | "avatar"
    | "locationLink"
    | "locationText"
    | "isAvailable"
    | "isAvailableText"
  > {
  classNames?: string;
}

const Hero: React.FC<HeroProps> = ({
  heroSection,
  avatar,
  locationLink,
  locationText,
  isAvailable,
  isAvailableText,
}) => {
  if (!heroSection) return null;
  return (
    <Wrapper containerClassNames='flex flex-col gap-4-xl items-center lg:flex-row-reverse lg:justify-between'>
      <CustomImage
        src={avatar.url}
        alt={defaultImageDescription}
        className='banner'
      />
      <div className='self-start flex flex-col gap-4-xl'>
        <div>
          <h1 className='text-gl-900 dark:text-gd-900 mb-0-md'>
            {heroSection.title}
          </h1>
          <p className='max-w-[70%] body2 text-gl-600 dark:text-gd-600'>
            {heroSection.description}
          </p>
        </div>
        <div>
          <Link
            href={locationLink}
            target='_blank'
            rel='noopener noreferrer'
            className='body2 relative text-gl-600 dark:text-gd-600 pl-3-sm flex items-center gap-0-md mb-0-md'>
            <LocationIcon className='absolute left-0' />
            {locationText}
          </Link>
          <p className='relative body2 text-gl-600 dark:text-gd-600 pl-3-sm  flex items-center gap-0-md'>
            <span
              className={`absolute left-0-md block w-0-md h-0-md rounded-[50%] ${
                isAvailable ? "bg-emerald" : "bg-red"
              }`}
            />
            {isAvailableText}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
