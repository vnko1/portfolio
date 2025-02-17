import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface SocialLink extends UIDType {
  link: string;
  icon: ImageType;
  text: string;
}

export interface ContactLink extends UIDType {
  link: string;
  title: string;
  text: string;
}
