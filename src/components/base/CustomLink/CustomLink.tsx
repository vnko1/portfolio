import React from "react";
import Link from "next/link";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props {
  classNames?: string;
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<Props> = ({ children, classNames, ...props }) => (
  <Link
    {...props}
    className={`inline-flex items-center justify-center gap-1-xs py-2-xs px-6-xs body1 bg-gr transition-all duration-300 hover:bg-gray-300 focus:bg-gray-300 hover:rounded-xl focus:rounded-xl ${classNames}`}
  >
    <Icon icon={IconsEnum.Arrow} />
    {children}
  </Link>
);

export default CustomLink;
