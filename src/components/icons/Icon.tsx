import React from "react";

import { IconsEnum } from "@/types";

import ArrowIcon from "./Arrow";

interface Props extends React.SVGAttributes<SVGElement> {
  icon: keyof typeof iconMap;
  size?: number;
}

const iconMap: Record<IconsEnum, React.FC> = {
  arrow: ArrowIcon,
};

const Icon: React.FC<Props> = ({ size = 24, icon, ...props }) => {
  const IconComponent = iconMap[icon];
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <IconComponent />
    </svg>
  );
};

export default Icon;
