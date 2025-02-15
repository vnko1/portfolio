import React from "react";
import Link, { LinkProps } from "next/link";

import { ClientType } from "@/types";
import Image from "next/image";

interface Props extends ClientType {
  classNames?: string;
}
const Client: React.FC<Props> = ({ classNames, logo, name, link }) => {
  return (
    <Link
      href={link}
      className={`relative inline-flex justify-center items-center w-[200px] h-[64px] ${classNames}`}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Image src={logo.url} alt={name} fill />
    </Link>
  );
};

export default Client;
