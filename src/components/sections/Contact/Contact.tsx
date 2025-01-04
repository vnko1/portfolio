import React from "react";
import Link from "next/link";
import { PortfolioType } from "@/types";
import { BaseIcon, CopyButton, Wrapper } from "@/components";

interface ContactProps
  extends Pick<
    PortfolioType,
    | "contactMeSection"
    | "phoneLink"
    | "phoneText"
    | "emailLink"
    | "emailText"
  > {
  classNames?: string;
}
const Contact: React.FC<ContactProps> = ({
  contactMeSection,
  phoneLink,
  phoneText,
  emailLink,
  emailText,
}) => {
  if (!contactMeSection) return null;
  return (
    <Wrapper containerClassNames='section-container' accentColor>
      <div className='section-content'>
        <h4 className='tag mx-auto'>{contactMeSection.title}</h4>
        <p className='subtitle text-center'>
          {contactMeSection.description}
        </p>
      </div>
      <ul className='flex flex-col gap-1-lg items-center'>
        <li className='flex items-center gap-1-lg lg:gap-2-xs'>
          <Link
            className='flex items-center gap-1-lg lg:gap-2-xs h2'
            href={emailLink}
            rel='noreferrer noopener'>
            <BaseIcon icon='letter' className='lg:hidden' />
            <BaseIcon
              icon='letter'
              size={32}
              className='hidden lg:block'
            />
            {emailText}
          </Link>
          <CopyButton text={emailText} />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Contact;
