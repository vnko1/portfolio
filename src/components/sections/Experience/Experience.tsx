import React from "react";
import { ExperienceCard, Wrapper } from "@/components";
import { PortfolioType } from "@/types";

interface ExperienceProps
  extends Pick<PortfolioType, "experienceSection" | "experience"> {
  classNames?: string;
}
const Experience: React.FC<ExperienceProps> = ({
  experienceSection,
  experience,
}) => {
  if (!(experienceSection && experience) || !experience.length)
    return null;

  return (
    <Wrapper accentColor containerClassNames='section-container'>
      <div className='section-content'>
        <h4 className='tag mx-auto'>{experienceSection.title}</h4>
        <p className='subtitle text-center'>
          {experienceSection.description}
        </p>
      </div>
      <ul className='flex flex-col gap-2-md lg:gap-4-xl w-full'>
        {experience.map((item) => (
          <li key={item.documentId}>
            <ExperienceCard {...item} classNames='mx-auto' />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Experience;
