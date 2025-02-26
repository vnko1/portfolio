"use client";
import React from "react";
import { IconsEnum } from "@/types";
import { getCurrentYear, handleDownload } from "@/utils";
import { IconButton } from "@/components";

interface Props {
  url?: string | null;
  copyright_text?: string;
}

const RightSideBar: React.FC<Props> = ({ url, copyright_text }) => {
  return (
    <div className="hidden xl:flex flex-col items-center justify-between xl:pb-4-xs xl:pt-[120px] h-screen bg-secondary-contrast mix-blend-multiply dark:mix-blend-screen bg-no-repeat bg-cover bg-main">
      <p className="relative top-[120px] -rotate-90 w-[320px] text-3xs leading-12 sm:text-xxs sm:leading-24 text-text-secondary">
        &#169; {getCurrentYear()}{" "}
        {copyright_text ? copyright_text : "VNKO. All rights reserved."}
      </p>
      {url && (
        <div className="flex flex-col items-center">
          <IconButton
            icon={IconsEnum.Download}
            size={20}
            onClick={() => handleDownload(url)}
            classNames="mb-1-sm"
          />
          <p className="hidden sm:block text-right font-medium text-3xs leading-12 md:text-xxs md:leading-16 text-text-secondary">
            My Resume
          </p>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
