import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface SkillType extends UIDType {
  title: string;
  progress: number | null;
  light_icon: ImageType | null;
  dark_icon: ImageType | null;
}
