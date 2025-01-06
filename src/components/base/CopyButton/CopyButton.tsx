"use client";
import React from "react";
import { IconsEnum } from "@/types";
import { BaseIcon } from "@/components";

interface CopyButtonProps {
  classNames?: string;
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  classNames,
  text,
}) => {
  const onClick = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <button className={`button icon ${classNames}`} onClick={onClick}>
      <BaseIcon icon={IconsEnum.ClipBoard} className='lg:hidden' />
      <BaseIcon
        icon={IconsEnum.ClipBoard}
        size={32}
        className='hidden lg:block'
      />
    </button>
  );
};

export default CopyButton;
