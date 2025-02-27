import React from "react";
import Link from "next/link";

import { ClientType } from "@/types";
import Image from "next/image";

interface Props extends ClientType {
  classNames?: string;
}
const ClientCard: React.FC<Props> = ({
  classNames,
  light_logo,
  dark_logo,
  name,
  link,
}) => {
  return (
    <Link
      href={link}
      className={`relative inline-flex justify-center items-center w-[200px] h-[64px] ${classNames}`}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Image src={light_logo.url} alt={name} fill className="dark:hidden" />
      <Image
        src={dark_logo.url}
        alt={name}
        fill
        className="hidden dark:block"
      />
    </Link>
  );
};

export default ClientCard;
