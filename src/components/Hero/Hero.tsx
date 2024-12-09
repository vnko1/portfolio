import React from "react";
import Image from "next/image";
import { PortfolioType } from "@/types/portfolio.types";

interface HeroProps
  extends Pick<
    PortfolioType,
    "firstName" | "lastName" | "position" | "avatar" | "contacts"
  > {
  mode: string;
}

const Hero: React.FC<HeroProps> = ({
  avatar,
  firstName,
  lastName,
  position,
  contacts,
  mode,
}) => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <Image src={avatar.url} alt="Avatar" fill sizes="100%" priority />
        </div>
        <div className="content">
          <div className="social_icons">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    mode === "dark"
                      ? contact.darkIcon.url
                      : contact.lightIcon.url
                  }
                  alt="contact icon"
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{position}</p>

          <div className="mobile_social_icons">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    mode === "dark"
                      ? contact.darkIcon.url
                      : contact.lightIcon.url
                  }
                  alt="contact icon"
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
