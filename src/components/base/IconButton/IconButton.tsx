import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props {
  imageUrl?: string;
  icon: IconsEnum;
  classNames?: string;
  href?: string;
  rel?: string;
  target?: string;
  size?: number;
  download?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const IconButton: React.FC<Props> = ({
  classNames,
  icon,
  size = 28,
  imageUrl,
  rel,
  target,
  href,
  onClick,
}) => {
  const baseClassNames = `inline-flex items-center justify-center w-3-xs h-3-xs md:w-4-xs md:h-4-xs rounded-[50%] text-light-primary dark:text-dark-primary bg-light-light dark:bg-dark-light hover:bg-light-accent-200 focus:bg-light-accent-200 dark:hover:bg-dark-accent-200 dark:focus:bg-dark-accent-200 hover:text-light-light focus:text-light-light dark:hover:text-dark-light dark:focus:text-dark-light transition-all duration-300 ${classNames}`;

  if (href && imageUrl)
    return (
      <Link
        href={href}
        className={`${baseClassNames} relative`}
        rel={rel}
        target={target}
      >
        <Image
          src={imageUrl}
          alt="icon"
          width={0}
          height={0}
          className="w-2-xs h-2-xs"
        />
      </Link>
    );
  return (
    <button onClick={onClick} className={baseClassNames}>
      <Icon size={size} icon={icon} />
    </button>
  );
};

export default IconButton;
