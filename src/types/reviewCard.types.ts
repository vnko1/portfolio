import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface ReviewCardType extends UIDType {
  avatar: ImageType | null;
  full_name: string;
  location: string | null;
  text: string;
}
