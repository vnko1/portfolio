import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";

import { AboutType, CommonType, CVType } from "@/types";

import { DownloadButton } from "..";

interface Props
  extends Pick<AboutType, "age" | "description">,
    Pick<CommonType, "location" | "contact_links">,
    Pick<CVType, "cv_link"> {}

const AboutSection: React.FC<Props> = ({
  description,
  age,
  location,
  contact_links,
  cv_link,
}) => (
  <section>
    <h2 className="section-title line">
      About <span>Me</span>
    </h2>
    <div className="flex flex-col gap-3-xs md:max-w-[70%] mb-4-xs">
      <Markdown
        components={{
          h1(props) {
            return <p className="body leading-32">{props.children}</p>;
          },
          strong(props) {
            return <span className="text-text-hint">{props.children}</span>;
          },
        }}
      >
        {description}
      </Markdown>
    </div>
    <ul className="grid grid-rows-2 grid-cols-2 gap-y-2-xl">
      <li>
        <h4 className="uppercase italic font-medium leading-30 text-xs text-text-contrast">
          age
        </h4>
        <p className="font-bold text-sm leading-34">{age}</p>
      </li>
      <li>
        <h4 className="uppercase italic font-medium leading-30 text-xs text-text-contrast">
          LOCATION
        </h4>
        <p className="font-bold text-sm leading-34">{location}</p>
      </li>
      {contact_links.map((contact) => (
        <li key={contact.documentId}>
          <h4 className="uppercase italic font-medium leading-30 text-xs text-text-contrast">
            {contact.title}
          </h4>
          <Link href={contact.link} className="font-bold text-sm leading-34">
            {contact.text}
          </Link>
        </li>
      ))}
    </ul>
    <DownloadButton cv_link={cv_link} />
  </section>
);

export default AboutSection;
