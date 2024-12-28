import React from "react";
import { IconProps } from "@/types";
import BaseIcon from "./BaseIcon";

const LetterIcon: React.FC<IconProps> = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        d='M26.6667 5.33301H5.33341C3.86066 5.33301 2.66675 6.52692 2.66675 7.99967V23.9997C2.66675 25.4724 3.86066 26.6663 5.33341 26.6663H26.6667C28.1395 26.6663 29.3334 25.4724 29.3334 23.9997V7.99967C29.3334 6.52692 28.1395 5.33301 26.6667 5.33301Z'
        className='icon-st'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M29.3334 9.33301L17.3734 16.933C16.9618 17.1909 16.4858 17.3277 16.0001 17.3277C15.5143 17.3277 15.0384 17.1909 14.6267 16.933L2.66675 9.33301'
        className='icon-st'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </BaseIcon>
  );
};

export default LetterIcon;
