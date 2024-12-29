import React from "react";
import { IconProps } from "@/types";

interface BaseIconProps extends IconProps {
  children: React.ReactNode;
}

const BaseIcon: React.FC<BaseIconProps> = ({
  children,
  size = 32,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 32 32'
    fill='none'
    {...props}>
    {children}
  </svg>
);

export default BaseIcon;
