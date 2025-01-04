"use client";
import { BaseIcon } from "@/components/icons";
import React from "react";

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
      <BaseIcon icon='clipboard' className='lg:hidden' />
      <BaseIcon
        icon='clipboard'
        size={32}
        className='hidden lg:block'
      />
    </button>
  );
};

export default CopyButton;
