import { ClientType } from "./client.types";
import { ExperienceCardType } from "./experienceCard.types";
import { ReviewCardType } from "./reviewCard.types";
import { SkillType } from "./skill.types";
import { UIDType } from "./uid.types";

export interface ResumeType extends UIDType {
  experience: ExperienceCardType[];
  skills: SkillType[];
  reviews: ReviewCardType[];
  clients: ClientType[];
}
