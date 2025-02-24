import React from "react";

import { ExperienceCardType } from "@/types";
import { Carousel, ExperienceCard } from "@/components";

interface Props {
  experience: ExperienceCardType[];
}

const ExperienceSection: React.FC<Props> = ({ experience }) =>
  experience.length ? (
    <section>
      <Carousel
        title={
          <h2 className="section-title">
            My <span>Experience</span>
          </h2>
        }
      >
        <ul className="flex">
          {experience.map((exp) => (
            <li
              key={exp.id}
              className="ml-1-xs mr-1-xs flex-[0_0_100%] 2xl:flex-[0_0_60%]"
            >
              <ExperienceCard {...exp} />
            </li>
          ))}
        </ul>
      </Carousel>
    </section>
  ) : null;

export default ExperienceSection;
