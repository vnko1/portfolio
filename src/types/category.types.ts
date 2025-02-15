import { UIDType } from "./uid.types";
import { ProjectCardType } from "./projectCard.types";

export interface CategoryType extends UIDType {
  category: string;
  order: number | null;
  projects: ProjectCardType[];
}
