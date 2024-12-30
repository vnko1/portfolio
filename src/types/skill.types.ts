import { ImageType } from "./media.types";
import { UIDType } from "./uid.types";

export interface SkillType extends UIDType {
  icon: ImageType;
  iconDescription: string | null;
  title: string;
}
