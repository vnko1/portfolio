import { CareerHistoryType } from "./careerHistory.types";
import { ContactType } from "./contact.types";
import { ExpertiseType } from "./expertise.types";
import { ProjectType } from "./project.types";
import { StrapiImageType } from "./strapiImage.types";

export interface PortfolioType {
  avatar: StrapiImageType;
  firstName: string;
  lastName: string;
  position: string;
  contacts: Array<ContactType>;
  expertise: Array<ExpertiseType>;
  careerHistory: Array<CareerHistoryType>;
  projects: Array<ProjectType>;
}
