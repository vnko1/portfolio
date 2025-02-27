import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface ClientType extends UIDType {
  name: string;
  link: string;
  light_logo: ImageType;
  dark_logo: ImageType;
}
