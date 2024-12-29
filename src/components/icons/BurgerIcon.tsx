import React from "react";
import { IconProps } from "@/types";
import BaseIcon from "./BaseIcon";

const BurgerIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <path
      d='M5.33325 16H26.6666'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.33325 8H26.6666'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.33325 24H26.6666'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </BaseIcon>
);

export default BurgerIcon;
