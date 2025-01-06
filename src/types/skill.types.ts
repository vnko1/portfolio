import { ImageType } from "./media.types";
import { UIDType } from "./uid.types";

export interface SkillType extends UIDType {
  iconLight: ImageType | null;
  iconDark: ImageType | null;
  iconDescription: string | null;
  title: string;
}
