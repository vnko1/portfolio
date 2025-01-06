import { UIDType } from "./uid.types";
import { ImageType } from "./media.types";
import { SkillType } from "./skill.types";

export interface ProjectType extends UIDType {
  banner: ImageType | null;
  bannerDescription: string | null;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string | null;
  techStacks: Array<SkillType>;
}
