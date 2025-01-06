import React from "react";
import { Wrapper } from "@/components/base";
import { BaseIcon } from "@/components/icons";
import { IconsEnum } from "@/types";

const Footer = () => {
  return (
    <Wrapper
      tag='footer'
      containerClassNames='flex justify-center items-center gap-0-md'>
      <BaseIcon size={16} icon={IconsEnum.Copyright} />
      <p className='text-sm leading-xxs text-gl-600 dark:text-gd-600'>
        {new Date().toLocaleDateString(undefined, {
          year: "numeric",
        })}
      </p>
    </Wrapper>
  );
};

export default Footer;
