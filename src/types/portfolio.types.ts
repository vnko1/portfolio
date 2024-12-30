import { ExperienceType } from "./experience.types";
import { LinkType } from "./link.types";
import { FileType, ImageType } from "./media.types";
import { ProjectType } from "./project.types";
import { SectionType } from "./section.types";
import { SkillType } from "./skill.types";
import { UIDType } from "./uid.types";

export interface PortfolioType extends UIDType {
  locationText: string;
  locationLink: string;
  isAvailable: boolean;
  isAvailableText: string | null;
  links: LinkType[];
  avatar: ImageType;
  banner: ImageType | null;
  skills: SkillType[] | null;
  experience: ExperienceType[] | null;
  projects: ProjectType[] | null;
  heroSection: SectionType | null;
  aboutMeSection: SectionType | null;
  skillsSection: SectionType | null;
  experienceSection: SectionType | null;
  projectsSection: SectionType | null;
  contactMeSection: SectionType | null;
  phoneLink: string;
  phoneText: string;
  emailLink: string;
  emailText: string;
  fileName: string | null;
  file: FileType;
}
