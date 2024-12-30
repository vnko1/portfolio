import { ImageType } from "./media.types";
import { UIDType } from "./uid.types";

export interface ExperienceType extends UIDType {
  title: string;
  period: string;
  description: string;
  icon: ImageType | null;
  iconDescription: string | null;
}
