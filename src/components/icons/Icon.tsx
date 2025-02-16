import React from "react";

import { iconMap } from "./svg";

interface Props extends React.SVGAttributes<SVGElement> {
  icon: keyof typeof iconMap;
  size?: number;
}

const Icon: React.FC<Props> = ({
  size = 20,
  width,
  height,
  icon,
  ...props
}) => {
  const IconComponent = iconMap[icon];
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || size}
      height={height || size}
      viewBox={`0 0 ${width || size} ${height || size}`}
      fill="none"
      {...props}
    >
      <IconComponent />
    </svg>
  );
};

export default Icon;
