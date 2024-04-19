import React, { FC } from "react";
import Link from "next/link";

import { Social } from "@/components";
import me from "@/lib/data/me.json";
import socials from "@/lib/data/socials.json";

const Hero: FC = () => {
  return (
    <>
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hey, My name is
          <br />
          {me.FULL_NAME}
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">{me.HERO_DESCRIPTION}</p>
        </div>

        <div className="home-hero__cta">
          <Link href="/#projects" className="btn btn--bg">
            Projects
          </Link>
        </div>
      </div>
      <ul className="home-hero__socials">
        {socials.map((el, i) => (
          <li key={i}>
            <Social link={el.link} icon={el.icon} />
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
