import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";

export interface SkillType extends UIDType {
  title: string;
  progress: number | null;
  icon: ImageType | null;
}
