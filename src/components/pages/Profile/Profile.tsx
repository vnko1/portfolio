import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CommonType } from "@/types";

interface Props extends Omit<CommonType, "copyright_text"> {}

const Profile: React.FC<Props> = ({
  banner,
  first_name,
  role,
  city,
  contact_links,
  social_links,
}) => {
  return (
    <div className="self-start basis-1/4 flex flex-col justify-between gap-3-xs pl-2-xs pt-2-xs pb-[86px] bg-light-secondary dark:bg-dark-secondary">
      <Image
        src={banner.url}
        alt={first_name}
        width={410}
        height={488}
        sizes="(max-width: 1535px) 100vw, 33vw"
        priority
      />

      <div className="px-4-xs">
        <p className="mb-0-lg font-bold leading-48 text-lg text-light-primary dark:text-dark-primary">
          {first_name}
        </p>
        <p className="font-normal text-xxs leading-24 text-light-primary/60 dark:text-dark-primary/60">
          {role} | {city}
        </p>
      </div>
      <div className="px-4-xs">
        <ul className="flex flex-col pl-1-sm gap-0-lg border-l-2 border-light-primary dark:border-dark-primary">
          {contact_links.map((link) => (
            <li key={link.documentId}>
              <Link
                href={link.link}
                className="font-bold leading-24 text-light-primary dark:text-dark-primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex gap-1-lg px-4-xs">
        {social_links.map((link) => (
          <li key={link.documentId}>
            <Link
              href={link.link}
              className="icon-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={link.icon.url}
                alt={link.text}
                width={0}
                height={0}
                className="w-2-xs h-2-xs"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
