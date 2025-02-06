import React from "react";
import Link from "next/link";

interface Props {
  classNames?: string;
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<Props> = ({ children, href, classNames }) => (
  <Link href={href} className={`${classNames}`}>
    {children}
  </Link>
);

export default CustomLink;
