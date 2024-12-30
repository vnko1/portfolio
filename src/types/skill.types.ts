import { ImageType } from "./media.types";
import { UIDType } from "./uid.types";

export interface SkillType extends UIDType {
  iconLight: ImageType;
  iconDark: ImageType;
  iconDescription: string | null;
  title: string;
}
