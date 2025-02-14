import { UIDType } from "./uid.types";

export interface ExperienceCardType extends UIDType {
  period: string;
  place: string;
  role: string;
  description: string;
}
