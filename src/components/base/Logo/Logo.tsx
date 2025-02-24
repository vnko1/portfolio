/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

import { Icon } from "@/components";
import { IconsEnum } from "@/types";

interface Props {
  classNames?: string;
}

const Logo: React.FC<Props> = ({ classNames }) => {
  return (
    <a
      className={`inline-flex items-center gap-0-lg text-md font-bold ${classNames}`}
      href="/"
    >
      <Icon
        icon={IconsEnum.Logo}
        width={48}
        height={27}
        className="text-light-accent-200 dark:text-dark-accent-200"
      />
      VNKO
    </a>
  );
};

export default Logo;
