import React, { FC } from "react";
import Link from "next/link";
import Markdown from "react-markdown";

import { SectionType } from "@/types/section.types";
import { ListType } from "@/types/list.types";

interface AboutProps extends SectionType {
  skills: Array<ListType>;
}

const About: FC<AboutProps> = ({
  title,
  subTitle,
  secondDescription,
  skills,
}) => {
  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-med">
        <span className="heading-sec__main">{title}</span>
        <span className="heading-sec__sub">{subTitle}</span>
      </h2>
      <div className="about__content">
        <div className="about__content-main">
          <h3 className="about__content-title">Get to know me!</h3>
          <div className="about__content-details">
            <Markdown className="about__content-details-para">
              {secondDescription}
            </Markdown>
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
            {skills.map((skill) => (
              <li className="skills__skill" key={skill.id}>
                {skill.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
