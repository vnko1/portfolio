import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CommonType, IconsEnum } from "@/types";
import { IconButton } from "@/components/base";

interface Props extends Omit<CommonType, "copyright_text"> {}

const Profile: React.FC<Props> = ({
  banner,
  full_name,
  role,
  city,
  contact_links,
  social_links,
}) => {
  return (
    <section className="flex flex-col justify-between gap-3-xs pl-2-xs pt-2-xs pb-[86px] bg-light-secondary dark:bg-dark-secondary">
      <Image
        src={banner.url}
        alt={full_name}
        width={410}
        height={488}
        sizes="(max-width: 1279px) 100vw, 33vw"
        priority
      />

      <div className="px-4-xs">
        <p className="mb-0-lg font-bold leading-48 text-lg text-light-primary dark:text-dark-primary">
          {full_name}
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
            <IconButton
              href={link.link}
              imageUrl={link.icon.url}
              icon={IconsEnum.Home}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Profile;
