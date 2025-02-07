import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CardType, IconsEnum } from "@/types";
import { Icon } from "@/components";

interface Props extends CardType {
  classNames?: string;
}

const Card: React.FC<Props> = ({
  banner,
  title,
  liveLink,
  codeLink,
  classNames,
  techStack,
}) => {
  return (
    <div className="flex flex-col gap-1-xs">
      <Link
        href={liveLink}
        className={`relative flex flex-col gap-1-xs xl:gap-2-xs w-full max-w-[360px] xl:max-w-[calc(100%/3-120px)] pt-[2%] pl-[2%] aspect-square ${classNames}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src={banner.url}
          alt={title}
          sizes="(max-width: 1439px) 100vw, 33vw"
          fill
        />
        <h3 className="relative z-10">{title}</h3>
        <p className="body1 relative z-10">{techStack}</p>
      </Link>
      {codeLink && (
        <Link
          href={codeLink}
          className="body1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon icon={IconsEnum.GitHub} size={32} />
        </Link>
      )}
    </div>
  );
};

export default Card;
