"use client";
import React from "react";
import { IconsEnum } from "@/types";
import { getCurrentYear, handleDownload } from "@/utils";
import { IconButton } from "@/components";

interface Props {
  url?: string | null;
}

const RightSideBar: React.FC<Props> = ({ url }) => {
  return (
    <div className="flex flex-col items-center justify-between pb-4-xs pt-[120px] h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main">
      <p className="relative top-[120px] -rotate-90 text-3xs leading-12 sm:text-xxs sm:leading-24 text-light-light dark:text-dark-light">
        &#169; {getCurrentYear()} VNKO. All rights reserved.
      </p>
      {url && (
        <div className="flex flex-col items-end">
          <IconButton
            icon={IconsEnum.Download}
            size={20}
            onClick={() => handleDownload(url)}
            classNames="mb-1-sm"
          />
          <p className="hidden sm:block font-medium text-3xs leading-12 md:text-xxs md:leading-16 text-light-light dark:text-dark-light">
            My Resume
          </p>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
