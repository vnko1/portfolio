import React from "react";
import Image from "next/image";

import { ServiceCardType } from "@/types";

interface Props extends ServiceCardType {
  classNames?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ServiceCard: React.FC<Props> = ({
  classNames,
  alt = "service icon",
  width = 24,
  height = 24,
  light_icon,
  dark_icon,
  title,
  description,
}) => (
  <div
    className={`flex gap-2-md py-3-xs px-[7%] border border-secondary-dark ${
      classNames || ""
    }`}
  >
    <div className="flex shrink-0 justify-center items-center w-full max-w-4-xl h-4-xl rounded-[50%] drop-shadow-sm bg-primary-light">
      <Image
        src={light_icon.url}
        alt={alt}
        width={width}
        height={height}
        className="dark:hidden"
        style={{ objectFit: "contain", width, height }}
      />
      <Image
        src={dark_icon.url}
        alt={alt}
        width={width}
        height={height}
        className="hidden dark:block"
        style={{ objectFit: "contain", width, height }}
      />
    </div>
    <div className="flex flex-col gap-1-sm">
      <h3>{title}</h3>
      <p className="body3">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
