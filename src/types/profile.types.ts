import { ContactType } from "./contact.types";
import { ListType } from "./list.types";
import { ProjectType } from "./project.types";
import { SectionType } from "./section.types";
import { StrapiImageType } from "./strapiImage.types";

export interface ProfileType {
  avatar: StrapiImageType;
  heroSection: SectionType;
  aboutSection: SectionType;
  projectsSection: SectionType;
  contactSection: SectionType;
  skills: Array<ListType>;
  contacts: Array<ContactType>;
  footDescription: string;
  projects: Array<ProjectType>;
}
