import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface ServiceCardType extends UIDType {
  light_icon: ImageType;
  dark_icon: ImageType;
  title: string;
  description: string;
}
