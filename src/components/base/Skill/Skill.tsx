import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  classNames?: string;
}

const Skill: React.FC<Props> = ({
  classNames,
  children,
  alt = "skill",
  width = 14,
  height = 14,
  src,
}) => {
  return (
    <div className={`inline-flex items-center gap-0-sm ${classNames}`}>
      <Image src={src} alt={alt} width={width} height={height} />
      {children}
    </div>
  );
};

export default Skill;
