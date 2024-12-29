import React from "react";
import { IconProps } from "@/types";
import BaseIcon from "./BaseIcon";

const CrossIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <path
      d='M24 8L8 24'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 8L24 24'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </BaseIcon>
);

export default CrossIcon;
