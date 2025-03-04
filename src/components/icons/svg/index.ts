import { IconsEnum } from "@/types";

import HomeIcon from "./HomeIcon";
import FrameIcon from "./FrameIcon";
import NoteIcon from "./NoteIcon";
import BriefcaseIcon from "./BriefcaseIcon";
import MessagesIcon from "./MessagesIcon";
import PrintIcon from "./PrintIcon";
import DownloadArrowIcon from "./DownloadArrowIcon";
import ArrowDownCircleIcon from "./ArrowDownCircleIcon";
import PointIcon from "./PointIcon";
import ArrowIcon from "./ArrowIcon";
import RightArrowIcon from "./RightArrowIcon";
import LightIcon from "./LightIcon";
import DarkIcon from "./DarkIcon";
import CheckIcon from "./CheckIcon";
import QuotesIcon from "./QuotesIcon";
import GithubIcon from "./GithubIcon";
import LogoIcon from "./LogoIcon";
import BurgerIcon from "./BurgerIcon";
import CrossIcon from "./CrossIcon";

export const iconMap: Record<IconsEnum, React.FC> = {
  [IconsEnum.Home]: HomeIcon,
  [IconsEnum.Frame]: FrameIcon,
  [IconsEnum.Note]: NoteIcon,
  [IconsEnum.Briefcase]: BriefcaseIcon,
  [IconsEnum.Messages]: MessagesIcon,
  [IconsEnum.Print]: PrintIcon,
  [IconsEnum.Download]: DownloadArrowIcon,
  [IconsEnum.ArrowDownCircle]: ArrowDownCircleIcon,
  [IconsEnum.Point]: PointIcon,
  [IconsEnum.Arrow]: ArrowIcon,
  [IconsEnum.RightArrow]: RightArrowIcon,
  [IconsEnum.Light]: LightIcon,
  [IconsEnum.Dark]: DarkIcon,
  [IconsEnum.Check]: CheckIcon,
  [IconsEnum.Quotes]: QuotesIcon,
  [IconsEnum.Github]: GithubIcon,
  [IconsEnum.Logo]: LogoIcon,
  [IconsEnum.Burger]: BurgerIcon,
  [IconsEnum.Cross]: CrossIcon,
};
