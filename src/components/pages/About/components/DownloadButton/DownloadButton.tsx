"use client";
import React from "react";

import { CVType, IconsEnum } from "@/types";
import { Button } from "@/components";
import { handleDownload } from "@/utils";

interface Props extends Pick<CVType, "cv_link"> {}

const DownloadButton: React.FC<Props> = ({ cv_link }) => {
  if (!cv_link) return null;

  return (
    <Button
      icon={IconsEnum.Download}
      size={24}
      classNames="mt-4-xs"
      onClick={() => handleDownload(cv_link)}
    >
      Download My Resume
    </Button>
  );
};

export default DownloadButton;
