import { ImageType } from "./media.types";
import { UIDType } from "./uid.types";

export interface LinkType extends UIDType {
  link: string;
  linkText: string;
  icon: ImageType | null;
  iconDescription: string | null;
  title: string;
}
