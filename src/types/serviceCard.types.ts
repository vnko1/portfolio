import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface ServiceCardType extends UIDType {
  icon: ImageType;
  title: string;
  description: string;
}
