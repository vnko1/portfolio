import React from "react";
import Link from "next/link";
import { IconsEnum, PortfolioType } from "@/types";
import { BaseIcon, CopyButton, Wrapper } from "@/components";

interface ContactProps
  extends Pick<
    PortfolioType,
    | "contactMeSection"
    | "phoneLink"
    | "phoneText"
    | "emailLink"
    | "emailText"
    | "links"
  > {
  classNames?: string;
}
const Contact: React.FC<ContactProps> = ({
  contactMeSection,
  phoneLink,
  phoneText,
  emailLink,
  emailText,
  links,
}) => {
  if (!contactMeSection) return null;
  return (
    <Wrapper containerClassNames='section-container' accentColor>
      <div className='section-content'>
        <h4 className='tag mx-auto'>{contactMeSection.title}</h4>
        <p className='subtitle text-center max-w-[60%] mx-auto'>
          {contactMeSection.description}
        </p>
      </div>
      <ul className='flex flex-col gap-1-lg items-center'>
        <li className='flex items-center gap-1-lg lg:gap-2-xs'>
          <Link
            className='flex items-center gap-1-lg lg:gap-2-xs h2'
            href={emailLink}
            rel='noreferrer noopener'>
            <BaseIcon icon={IconsEnum.Letter} className='lg:hidden' />
            <BaseIcon
              icon={IconsEnum.Letter}
              size={32}
              className='hidden lg:block'
            />
            {emailText}
          </Link>
          <CopyButton text={emailText} />
        </li>
        <li className='flex items-center gap-1-lg lg:gap-2-xs'>
          <Link
            className='flex items-center gap-1-lg lg:gap-2-xs h2'
            href={phoneLink}
            rel='noreferrer noopener'>
            <BaseIcon icon={IconsEnum.Phone} className='lg:hidden' />
            <BaseIcon
              icon={IconsEnum.Phone}
              size={32}
              className='hidden lg:block'
            />
            {phoneText}
          </Link>
          <CopyButton text={phoneText} />
        </li>
      </ul>
      <div className='flex flex-col gap-0-md'>
        <p className='body2 text-gl-600 dark:text-gd-600'>
          You may also find me on these platforms!
        </p>
        <div className='flex gap-0-sm justify-center'>
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              target='_blanc'
              rel='noreferrer noopener'
              className='button icon'>
              <BaseIcon icon={link.title as IconsEnum} />
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
