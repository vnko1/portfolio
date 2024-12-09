import { SkillType } from "./skill.types";
import { StrapiImageType } from "./strapiImage.types";

export interface ExpertiseType {
  id: number;
  lightIcon: StrapiImageType;
  darkIcon: StrapiImageType;
  title: string;
  description: string;
  stackList: Array<SkillType>;
}
