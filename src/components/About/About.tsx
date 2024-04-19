import React, { FC } from "react";
import Link from "next/link";

import me from "@/lib/data/me.json";
import skills from "@/lib/data/skills.json";

const About: FC = () => {
  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main">About Me</span>
        <span className="heading-sec__sub">{me.ABOUT_TITLE}</span>
      </h2>
      <div className="about__content">
        <div className="about__content-main">
          <h3 className="about__content-title">Get to know me!</h3>
          <div className="about__content-details">
            <p className="about__content-details-para">
              Hey! It&apos;s <strong>{me.FULL_NAME}</strong> and I&apos;m a{" "}
              <strong> Frontend Web Developer </strong> located in Kyiv.
              I&apos;ve done <strong> remote </strong> projects and collaborated
              with talented people to create <strong>digital products </strong>{" "}
              for both business and consumer use.
            </p>
            <p id="details-para" className="about__content-details-para">
              I&apos;m a bit of a digital product junky. Over the years,
              I&apos;ve used hundreds of web and mobile apps in different
              industries and verticals. Feel free to <strong>contact</strong> me
              here.
            </p>
          </div>
          <Link
            href="/#contact"
            className="btn btn--med btn--theme dynamicBgClr"
          >
            Contact
          </Link>
        </div>
        <div className="about__content-skills">
          <h3 className="about__content-title">My Skills</h3>
          <ul className="skills">
            {skills.map((el, i) => (
              <li className="skills__skill" key={i}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
