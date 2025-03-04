import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ContactType } from "@/types";

interface Props extends ContactType {}
const Contacts: React.FC<Props> = ({
  text,
  contact_links,
  location,
  locationLink,
  social_links,
}) => {
  return (
    <div className="2xl:basis-1/2 px-2-xs py-1-md sm:px-3-md sm:py-2-lg 2xl:px-[80px] 2xl:py-[60px] bg-secondary-light">
      <h3 className="text-xl leading-48 font-extrabold mb-1-lg">
        Feel free to <br />
        <span className="font-medium">contact me</span>
      </h3>
      <p className="body leading-26 mb-3-xs">{text}</p>
      <ul className="flex flex-col gap-0-md  mb-2-md text-xs leading-28">
        {contact_links.map((contact) => {
          if (contact.title.startsWith("phone"))
            return (
              <li key={contact.id}>
                Tel: <Link href={contact.link}>{contact.text}</Link>
              </li>
            );
          return (
            <li key={contact.id}>
              <Link href={contact.link}>{contact.text}</Link>
            </li>
          );
        })}
        <li>
          <Link href={locationLink} target="_blank" rel="noopener noreferrer">
            {location}
          </Link>
        </li>
      </ul>
      <ul className="flex gap-2-md">
        {social_links.map((social) => (
          <li key={social.id}>
            <Link
              href={social.link}
              className="icon-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={social.light_icon.url}
                alt={social.text}
                width={0}
                height={0}
                className="w-2-xs h-2-xs dark:hidden"
              />
              <Image
                src={social.dark_icon.url}
                alt={social.text}
                width={0}
                height={0}
                className="w-2-xs h-2-xs hidden dark:block"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
