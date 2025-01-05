import React from "react";

import { IconProps, IconsEnum } from "@/types";
import BurgerIcon from "./BurgerIcon";
import ClipboardIcon from "./ClipboardIcon";
import CopyrightIcon from "./CopyrightIcon";
import CrossIcon from "./CrossIcon";
import GithubIcon from "./GithubIcon";
import LetterIcon from "./LetterIcon";
import LocationIcon from "./LocationIcon";
import MoonIcon from "./MoonIcon";
import NavigationIcon from "./NavigationIcon";
import PhoneIcon from "./PhoneIcon";
import SunIcon from "./SunIcon";

const iconMap: Record<IconsEnum, React.FC<IconProps>> = {
  burger: BurgerIcon,
  clipboard: ClipboardIcon,
  copyright: CopyrightIcon,
  cross: CrossIcon,
  github: GithubIcon,
  letter: LetterIcon,
  location: LocationIcon,
  moon: MoonIcon,
  navigation: NavigationIcon,
  phone: PhoneIcon,
  sun: SunIcon,
};

interface BaseIconProps extends IconProps {
  icon: keyof typeof iconMap;
}

const BaseIcon: React.FC<BaseIconProps> = ({
  size = 24,
  icon,
  ...props
}) => {
  const IconComponent = iconMap[icon];
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      {...props}>
      <IconComponent {...props} />
    </svg>
  );
};

export default BaseIcon;
