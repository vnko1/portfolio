import React, { FC } from "react";
import Link from "next/link";

import { Social } from "@/components";
import { SectionType } from "@/types/section.types";
import { ContactType } from "@/types/contact.types";

interface HeroProps extends SectionType {
  contacts: Array<ContactType>;
}

const Hero: FC<HeroProps> = ({ subTitle, contacts }) => {
  return (
    <>
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hey, My name is
          <br />
          Andrii Valenko
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">{subTitle}</p>
        </div>

        <div className="home-hero__cta">
          <Link href="/#projects" className="btn btn--bg">
            Projects
          </Link>
        </div>
      </div>
      <ul className="home-hero__socials">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Social link={contact.link} icon={contact.image.url} />
          </li>
        ))}
      </ul>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </>
  );
};

export default Hero;
