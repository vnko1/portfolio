import React from "react";

import Image from "next/image";
import { ContactType } from "@/types/contact.types";

interface FooterProps {
  contacts: Array<ContactType>;
  mode: string;
}

const Footer: React.FC<FooterProps> = ({ contacts, mode }) => {
  return (
    <footer>
      {contacts.map((contact) => (
        <a
          key={contact.id}
          href={contact.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={mode === "dark" ? contact.darkIcon.url : contact.lightIcon.url}
            alt="contact icon"
            width={32}
            height={32}
          />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
