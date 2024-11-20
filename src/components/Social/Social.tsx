import React, { FC } from "react";
import Image from "next/image";

type SocialProps = { link: string; icon: string; isFooter?: boolean };

const Social: FC<SocialProps> = ({ link, icon, isFooter = false }) => {
  if (isFooter)
    return (
      <a
        rel="noreferrer noopener"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src={icon}
          alt="social icon"
          width={26}
          height={26}
          className="main-footer__icon"
        />
      </a>
    );

  return (
    <div className="home-hero__social">
      <a
        href={link}
        className="home-hero__social-icon-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src={icon}
          alt="social icon"
          className="home-hero__social-icon"
          width={26}
          height={26}
        />
      </a>
    </div>
  );
};

export default Social;
