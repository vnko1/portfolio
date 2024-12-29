import React from "react";
import { IconProps } from "@/types";
import BaseIcon from "./BaseIcon";

const NavigationIcon: React.FC<IconProps> = (props) => (
  <BaseIcon {...props}>
    <path
      d='M24 17.3333V25.3333C24 26.0406 23.719 26.7189 23.219 27.219C22.7189 27.719 22.0406 28 21.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V10.6667C4 9.95942 4.28095 9.28115 4.78105 8.78105C5.28115 8.28095 5.95942 8 6.66667 8H14.6667'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 4H28V12'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.3333 18.6667L27.9999 4'
      className='icon-stroke'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </BaseIcon>
);

export default NavigationIcon;
