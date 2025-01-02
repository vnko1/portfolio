import React from "react";
import CustomImage from "../CustomImage/CustomImage";

interface BannerProps {
  src: string;
  alt: string;
  classNames?: string;
}

const Banner: React.FC<BannerProps> = ({ classNames, ...props }) => {
  return (
    <div className={`${classNames}`}>
      <CustomImage
        {...props}
        className='w-[240px] h-[280px] border-[8px] border-gl-0 dark:border-gd-0 bg-gl-200 dark:bg-gd-200 bg-no-repeat'
      />
    </div>
  );
};

export default Banner;
