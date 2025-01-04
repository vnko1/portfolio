import React from "react";
import Markdown from "react-markdown";

import { PortfolioType } from "@/types";
import { defaultImageDescription } from "@/utils";
import { CustomImage, Wrapper } from "@/components";

interface AboutProps
  extends Pick<PortfolioType, "aboutMeSection" | "banner"> {
  classNames?: string;
}

const About: React.FC<AboutProps> = ({ banner, aboutMeSection }) => {
  if (!aboutMeSection) return null;

  return (
    <Wrapper
      accentColor
      containerClassNames='flex flex-col items-center gap-2-md lg:gap-4-xl'>
      <h4 className='tag mx-auto'>{aboutMeSection.title}</h4>
      <div className='flex flex-col items-center gap-4-xl w-full lg:flex-row lg:justify-between'>
        {banner && (
          <CustomImage
            src={banner.url}
            alt={defaultImageDescription}
            className='banner banner2'
            priority
          />
        )}
        {aboutMeSection.secondaryDescription && (
          <div className='flex flex-col gap-2-md lg:max-w-[50%] lg:self-start'>
            <Markdown
              components={{
                h3: (props) => (
                  <h3 className='text-gl-900 dark:text-gd-900'>
                    {props.children}
                  </h3>
                ),
                p: (props) => (
                  <p className='body2 text-gl-600 dark:text-gd-600'>
                    {props.children}
                  </p>
                ),
              }}>
              {aboutMeSection.secondaryDescription}
            </Markdown>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default About;
